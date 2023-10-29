import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css']
})
export class CarouselComponentComponent {
  index:number = 0;
  news:any= {};
  increaseIndex():void {
    this.index = (this.index+1)%3;
  }
  decreaseIndex():void {
    this.index = (this.index+2)%3;
  }
  chooseIndex(newIndex:number):void {
    this.index = newIndex;
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
