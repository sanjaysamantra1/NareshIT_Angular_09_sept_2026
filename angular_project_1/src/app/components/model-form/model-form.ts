import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-model-form',
  styleUrl: './model-form.css',
  templateUrl: './model-form.html',
})
export class ModelForm {
  registerForm;
  formBuilder = inject(FormBuilder);

  constructor() {
    /* this.registerForm = new FormGroup({
      firstName: new FormControl('Virat', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
      }),
    }); */

    this.registerForm = this.formBuilder.group({
      firstName: ['Virat', [Validators.required, Validators.minLength(5)]],
      lastName: ['Kohli', [Validators.required]],
      email: [],
      address: this.formBuilder.group({
        city: [],
        state: [],
        pincode: [],
      }),
    });
  }

  submitMyForm() {
    console.log(this.registerForm.value);
  }
}
