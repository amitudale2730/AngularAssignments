import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private strService:StringService) { }
  capitalCnt:number;
  
  ngOnInit() {
    this.capitalCnt = this.strService.CountCapital("ABCD");
    console.log(this.capitalCnt);
  }

}
