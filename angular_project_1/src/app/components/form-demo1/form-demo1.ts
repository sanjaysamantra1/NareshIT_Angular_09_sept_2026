import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-form-demo1',
  styleUrl: './form-demo1.css',
  templateUrl: './form-demo1.html',
})
export class FormDemo1 {
  name = '';
  age = null;
}
