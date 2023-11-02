import { Component,Input} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  parentData:any = {};
  myFunction = (eventData:any) => {
    this.parentData = eventData;
    console.log("metot çalışıyor:", eventData)
  }  
  @Input() categoryname : any;

}
