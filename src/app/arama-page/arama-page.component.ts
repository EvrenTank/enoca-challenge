import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arama-page',
  templateUrl: './arama-page.component.html',
  styleUrls: ['./arama-page.component.css']
})
export class AramaPageComponent {
  news:any= {};
  myIndex:number =  0;
  query:string = '';
  arananKelime:string = "";
  
  setMyIndex(newindex:number):void{
    this.myIndex = newindex;
  }

  createRange(number:number){
    // return new Array(number);

    return new Array(Math.ceil(number/10)).fill(0)
      .map((n, index) => index + 1);
  }


  constructor(private http:HttpClient, private route: ActivatedRoute ){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.query = params['query'];
      this.arananKelime = this.query.split("=")[1];
      console.log("query:",this.query);
      console.log("Aranan kelime:",this.arananKelime);
      this.http.get(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971`).subscribe(
  (data:any) => {
    console.log(data);
   // this.news=data.articles.forEach((article:any)=>console.log(article.title.toLowerCase().includes(this.arananKelime.toLowerCase())));
    this.news=data.articles.filter((article:any)=>article.title.toLowerCase().includes(this.arananKelime.toLowerCase()));

  },
  (error) => {
    console.error('API isteği sırasında hata oluştu:', error);
  }
);
    })
  }

}
