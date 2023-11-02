import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent {

  news:any= {};
  myIndex:number =  0;
  myUrl:string = "";
  
  categoryname:string = 'categories';
  category = undefined;
  publisher = undefined;
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
      
      if(this.category == undefined) {
          this.myUrl = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971"
      }
      else {
          this.myUrl = `https://newsapi.org/v2/top-headlines?country=tr&category=${this.category}&apiKey=676f017549224f488970f1835f9db971`
      }

      this.http.get(this.myUrl).subscribe(
  (data:any) => {
    console.log(data.articles);

  
    /*if(data?.articles){
      console.log('API verisi:',data.articles)
    }*/

    this.news = this.publisher == undefined ? data.articles : data.articles.filter((article:any)=> article.author == this.publisher);
    console.log("filtered news=",this.news);
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

  changeCategory(event:any){
    this.category = event.target.value=='hepsi'? undefined : event.target.value;
    console.log("this.myUrl", this.myUrl);
    this.ngOnInit()
  }
  changePublisher(event:any){
    this.publisher = event.target.value=='hepsi'? undefined : event.target.value;
    this.ngOnInit()
  }

}
