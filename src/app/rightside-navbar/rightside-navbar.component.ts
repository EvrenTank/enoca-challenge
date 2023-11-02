import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rightside-navbar',
  templateUrl: './rightside-navbar.component.html',
  styleUrls: ['./rightside-navbar.component.css']
})
export class RightsideNavbarComponent{
  @Input() data : any;
  @Output() dataChanged = new EventEmitter();
  @Input() categoryname : any;
 
}
