import { Component,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header-first-section',
  templateUrl: './header-first-section.component.html',
  styleUrls: ['./header-first-section.component.css']
})
export class HeaderFirstSectionComponent {
 @Input() data : any;
 @Output() myEvent = new EventEmitter();

 
}
