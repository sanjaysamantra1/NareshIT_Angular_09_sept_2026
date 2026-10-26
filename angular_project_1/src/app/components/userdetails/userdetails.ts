import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-userdetails',
  styleUrl: './userdetails.css',
  templateUrl: './userdetails.html',
})
export class Userdetails {
  user: any = signal({});
  httpClient = inject(HttpClient);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${params['id']}`)
        .subscribe((response) => {
          this.user.set(response);
        });
    });
  }
}
