import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {
Counter : number = 100;

  constructor() { }

addOn(){

  this.Counter++;

}

}
