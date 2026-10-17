import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map } from 'rxjs';

@Component({
  imports: [CommonModule],
  selector: 'app-observable-demo1',
  styleUrl: './observable-demo1.css',
  templateUrl: './observable-demo1.html',
})
export class ObservableDemo1 {
  ngOnInit() {
    // this.from_demo();
    this.interval_demo();
  }

  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti'];
    let carsObs = from(cars);

    carsObs.subscribe({
      next: (data) => console.log('Next Data: ', data),
      error: (err) => console.log('error', err),
      complete: () => console.log('Everything Received'),
    });
  }

  num = interval(1000);
  even_num = this.num.pipe(filter((ele) => ele % 2 == 0));
  num_square = this.num.pipe(map((ele) => ele * ele));

  interval_demo() {
    this.num.subscribe((val) => console.log('value: ', val));
  }
  currentTime$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()));
}
