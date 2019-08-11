import { Component, OnInit ,Input} from '@angular/core';
import{FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})
export class BugInfoComponent implements OnInit {
  @Input() bugInfoForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
