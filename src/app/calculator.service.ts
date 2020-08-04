import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  add(num1, num2) {
    return num1 + num2;
  }
}
