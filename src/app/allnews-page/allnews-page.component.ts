import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allnews-page',
  templateUrl: './allnews-page.component.html',
  styleUrls: ['./allnews-page.component.css']
})
export class AllnewsPageComponent {
  news:any= {};
  myIndex:number =  0;


  setMyIndex(newindex:number):void{
    this.myIndex = newindex;
  }

  createRange(number:number){
    // return new Array(number);

    return new Array(Math.ceil(number/10)).fill(0)
      .map((n, index) => index + 1);
  }

  constructor(private http:HttpClient ){}
  ngOnInit(){
    this.http.get('https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971').subscribe(
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

  }
}
