import { Component, signal } from '@angular/core';
import { MathComponent } from './components/math-component/math-component';

@Component({
  imports: [MathComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular_project_2');
}
