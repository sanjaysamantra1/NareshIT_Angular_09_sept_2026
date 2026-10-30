import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class UserService {
  httpClient = inject(HttpClient);

  getAllUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
