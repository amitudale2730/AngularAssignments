import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystems';

public lower()
{
  this.title=this.title.toLowerCase();
}
public upper()
{
  this.title=this.title.toUpperCase();
}
}


