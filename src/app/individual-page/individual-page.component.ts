import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-page',
  templateUrl: './individual-page.component.html',
  styleUrls: ['./individual-page.component.css']
})
export class IndividualPageComponent {
  news:any= {};
  myIndex:number =  0;
  
  categoryname:string = 'business';
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
      this.categoryname = params['categoryname'];
      console.log("individualpage categoryname",this.categoryname);
      this.http.get(`https://newsapi.org/v2/top-headlines?country=tr&category=${this.categoryname}&apiKey=676f017549224f488970f1835f9db971`).subscribe(
  (data) => {
    console.log(data);
    /*if(data?.articles){
      console.log('API verisi:',data.articles)
    }*/
    this.news = data;
   /* for(let key in data){
      console.log("key",key);
      console.log("key",this.news[]);
    }
*/
  },
  (error) => {
    console.error('API isteği sırasında hata oluştu:', error);
  }
);
    })
    

  }
}
