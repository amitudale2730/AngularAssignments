import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private numService:NumberService, private strService:StringService) { }
  public prime:string = '';
  public cnt:number = 0;

  ngOnInit() {
    this.prime = this.numService.checkPrime(7);
    this.cnt = this.strService.CountCapital("JayDEv");
  }

}
