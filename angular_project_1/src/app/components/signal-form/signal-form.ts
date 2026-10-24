import { Component, signal } from '@angular/core';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-signal-form',
  styleUrl: './signal-form.css',
  templateUrl: './signal-form.html',
})
export class SignalForm {
  loginModel = signal({ email: '', password: '' });
  loginForm = form(this.loginModel, (schema) => {
    required(schema.email, { message: 'Email is required' });
    email(schema.email, { message: 'Email Format is not correct' });
    minLength(schema.email, 5, { message: 'Email Should have minimum 5 chars' });
  });
}
