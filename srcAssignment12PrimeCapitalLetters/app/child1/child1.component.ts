import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private noService:NumberService) { }
  prime:string = '';
 
  ngOnInit() {
    this.prime = this.noService.checkPrime(7);
  }

}
