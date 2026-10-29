import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-math-component',
  styleUrl: './math-component.css',
  templateUrl: './math-component.html',
})
export class MathComponent {
  add(a: number, b: number): number {
    return a + b;
  }
  sub(a: number, b: number): number {
    return a - b;
  }

  sumofDigits(num: number) {
    let sum = 0;
    while (num != 0) {
      let rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  cars = ['Tata', 'Honda'];
  addNewCar(newCar: string) {
    this.cars.push(newCar);
  }
}
