import { CommonModule } from '@angular/common';
import { ToDoService } from './../../services/to-do-service';
import { Component, inject } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {
  toDoService = inject(ToDoService);
  todoData = this.toDoService.todoObs;

  deleteToDo(toDoId: number) {
    this.toDoService.deleteToDo(toDoId);
  }
}
