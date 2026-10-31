import { decrement, increment, reset } from './../../actions/counter.actions';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  imports: [CommonModule],
  selector: 'app-counter-demo',
  styleUrl: './counter-demo.css',
  templateUrl: './counter-demo.html',
})
export class CounterDemo {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = store.select((state: any) => state.countData); // selector
    console.log(this.count$);
  }

  incrementValue() {
    this.store.dispatch(increment());
  }
  decrementValue() {
    this.store.dispatch(decrement());
  }
  resetValue() {
    this.store.dispatch(reset());
  }
}
