import { Component, signal } from '@angular/core';
import { MathComponent } from './components/math-component/math-component';
import { MaterialDemo } from './components/material-demo/material-demo';
import { CounterDemo } from './components/counter-demo/counter-demo';
import { TaskList } from './components/task-list/task-list';

@Component({
  imports: [
    // MathComponent,
    // MaterialDemo
    // CounterDemo
    TaskList
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular_project_2');
}

