import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  checkPrime(no1:number)
  {
    if(no1 == 1)
    {
      return "No is prime"; 
    }

    for (let i=2;  i<no1; i++)
    {
      if (no1%i == 0)
      {
        return "No is not prime";
      }
    }

    return "No is Prime";
  }
}
