import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  cnt:number = 0;
  constructor() { }

  CountCapital(str:string)
  {
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)
      {    
        this.cnt++;
      }
    }

    return this.cnt;
  }
}
