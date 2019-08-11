import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // Create object of event class
  @Input() public data="";
  @Output() public obj = new EventEmitter();
 
  // Action listener for button
  public sendEvent()
  {
    // Send the event to parent
    this.obj.emit("Hi From child component");
  }
  constructor() { }

  ngOnInit() {
  }


}
