import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  imports: [CommonModule],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList {
  userService = inject(UserService);
  userData: Observable<any> | undefined;

  ngOnInit() {
    // getAllUsers() returns Observable
    this.userData = this.userService.getAllUsers();
    console.log(this.userData); // userData is not array its observable
  }
}
