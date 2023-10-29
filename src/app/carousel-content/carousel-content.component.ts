import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-carousel-content',
  templateUrl: './carousel-content.component.html',
  styleUrls: ['./carousel-content.component.css']
})
export class CarouselContentComponent {
  @Input() haberVerisi : any;
  
}
