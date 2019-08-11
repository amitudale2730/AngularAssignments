import { Component, OnInit } from '@angular/core';

import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private arithmeticService:ArithmeticService) { }
  public add:number;
  public sub:number;

  ngOnInit() {
    this.add = this.arithmeticService.add(10,20);
    this.sub = this.arithmeticService.sub(100,20);
  }

}
