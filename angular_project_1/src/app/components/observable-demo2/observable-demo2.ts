import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-observable-demo2',
  styleUrl: './observable-demo2.css',
  templateUrl: './observable-demo2.html',
})
export class ObservableDemo2 {
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.forkjoin_demo();
  }

  forkjoin_demo() {
    let userNames = ['sanjaysamantra1', 'ushamahesh818', 'Manish-surya', 'GurramSarika09'];

    let requestArr = userNames.map((userName) => {
      return this.httpClient.get(`https://api.github.com/users/${userName}`);
    });
    forkJoin(requestArr).subscribe((responseArr) => {
      console.log(responseArr);
    });
  }
}
