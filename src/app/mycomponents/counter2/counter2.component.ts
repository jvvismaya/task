import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component {
  clickEventSubscription:Subscription;

  constructor(private sharedService:SharedService){
    this.clickEventSubscription=this.sharedService.getClickEvent().subscribe(()=>{
      this.incrementCount();
     
      
      
    })
   
  }
  count:number=0;
  incrementCount(){
    this.count++;
  }   
  

  
  }
  




