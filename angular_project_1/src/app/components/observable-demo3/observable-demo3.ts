import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { of, mergeMap, concatMap, Observable, switchMap, map } from 'rxjs';

@Component({
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  selector: 'app-observable-demo3',
  styleUrl: './observable-demo3.css',
  templateUrl: './observable-demo3.html',
})
export class ObservableDemo3 {
  httpClient = inject(HttpClient);

  searchResult$: Observable<any> | undefined;
  searchForm: any;
  constructor() {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  }

  ngOnInit(){
    // this.mergeMap_demo();
    // this.concatMap_demo();
    this.switchMap_demo();
  }
  switchMap_demo(){
    this.searchResult$ = this.searchForm.get('searchField').valueChanges.pipe(
      switchMap((term) => this.httpClient.get<any>(`https://dummyjson.com/users/search?q=${term}`)),
      map((response: any) => (response.users.length > 0 ? response.users : [])),
    );
  }

  mergeMap_demo(){
    let userPublisher = of(1, 2, 3, 4, 5); // outer observable
    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // nested observable
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }

  concatMap_demo(){
    let userPublisher = of(1, 2, 3, 4, 5); // outer observable
    userPublisher.pipe(concatMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // nested observable
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }
}
