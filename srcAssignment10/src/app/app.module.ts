import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {AlertModule} from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BugInfoComponent } from './bug-info/bug-info.component';
import { FooterComponent } from './footer/footer.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowDataComponent } from './show-data/show-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalInfoComponent,
    BugInfoComponent,
    FooterComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
        ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
