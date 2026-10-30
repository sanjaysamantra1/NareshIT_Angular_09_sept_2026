import { Component, signal } from '@angular/core';
import { MathComponent } from './components/math-component/math-component';
import { MaterialDemo } from './components/material-demo/material-demo';

@Component({
  imports: [
    // MathComponent,
    MaterialDemo
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular_project_2');
}
