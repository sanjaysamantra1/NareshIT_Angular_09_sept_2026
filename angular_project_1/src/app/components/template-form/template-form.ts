import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-template-form',
  styleUrl: './template-form.css',
  templateUrl: './template-form.html',
})
export class TemplateForm {
  user = {
    firstName:"Virat",
    lastName:"Kohli",
    email:"virat@gmail.com",
    address:{
      city:"",
      state:"",
      pincode:"",
    }

  }

  submitForm(formData: any) {
    console.log(formData);
  }
}
