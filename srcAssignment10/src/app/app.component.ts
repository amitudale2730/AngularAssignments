import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BootstrapDemo';
  bugInfoForm: FormGroup;
  constructor(private fb: FormBuilder
  ) {
  }

  ngOnInit()
  {
    this.bugInfoForm = this.fb.group({
      fname:[],
      lname:[],
      email:[],
      
      impact:[],
      detailExplanation:[],

    })

  }
  onSubmit()
  {
    console.log(this.bugInfoForm.value)
  }
}
