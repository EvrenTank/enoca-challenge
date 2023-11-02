import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'enocaChallenge';
  categoryname:string = 'business';

  constructor(private route: ActivatedRoute ){}
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.categoryname = params['categoryname'];
      console.log(this.categoryname);
    })
  }
}
