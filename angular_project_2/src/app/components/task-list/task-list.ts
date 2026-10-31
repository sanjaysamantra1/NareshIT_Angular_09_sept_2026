import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteTask, toggleTask } from '../../actions/task.actions';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})
export class TaskList {
  taskArr$: Observable<Task[]>;

  constructor(private store: Store) {
    this.taskArr$ = this.store.select((store: any) => store.taskData); // selector
  }
  deleteMyTask(taskId: number) {
    this.store.dispatch(deleteTask({ id: taskId }));
  }
  toggleMyTask(taskId: number) {
    this.store.dispatch(toggleTask({ id: taskId }));
  }
}
