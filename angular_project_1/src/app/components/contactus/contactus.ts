import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-contactus',
  styleUrl: './contactus.css',
  templateUrl: './contactus.html',
})
export class Contactus {
  user = { name: 'Sanjay', email: 'test@gmail.com' };
  original = { ...this.user };
  hasChanges = false;

  checkChanges() {
    this.hasChanges = JSON.stringify(this.user) !== JSON.stringify(this.original);
  }

  onSubmit() {
    this.original = { ...this.user };
    this.hasChanges = false;
  }
}
