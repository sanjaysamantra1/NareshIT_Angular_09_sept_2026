import { ToDoService } from './../../services/to-do-service';
import { Component, inject } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-todo-add',
  styleUrl: './todo-add.css',
  templateUrl: './todo-add.html',
})
export class TodoAdd {
  toDoService = inject(ToDoService);

  addNewTodo(value: string) {
    this.toDoService.addNewTodo({ value });
  }
}
