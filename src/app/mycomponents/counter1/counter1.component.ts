import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css']
})
export class Counter1Component {
  constructor(private sharedService:SharedService){}

  clickMe(){
    this.sharedService.sendClickEvent();
  }
  
}
