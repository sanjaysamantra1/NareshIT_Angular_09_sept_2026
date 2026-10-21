import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { of, mergeMap } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-observable-demo3',
  styleUrl: './observable-demo3.css',
  templateUrl: './observable-demo3.html',
})
export class ObservableDemo3 {
  httpClient = inject(HttpClient);

  ngOnInit(){
    this.mergemap_demo();
  }
  mergemap_demo(){
    let userPublisher = of(1, 2, 3, 4, 5); // outer observable
    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // nested observable
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }
}
