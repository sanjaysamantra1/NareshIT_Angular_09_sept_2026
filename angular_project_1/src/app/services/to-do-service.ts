import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: any;
  value: string;
}
const initialTodos = [
  { id: 1, value: 'Complete Angular Assignment' },
  { id: 2, value: 'Learn Java Stream API' },
];
@Service()
export class ToDoService {
  private todoSubject = new BehaviorSubject<Todo[]>(initialTodos); // writeable

  readonly todoObs = this.todoSubject.asObservable(); // readonly, only subscribe
  private todoArr: Todo[] = this.todoSubject.value;
  private nextId = 3;

  addNewTodo(item: any) {
    item.id = this.nextId++;
    this.todoArr.push(item);
    this.todoSubject.next([...this.todoArr]);
  }
  deleteToDo(id: number) {
    this.todoArr.forEach((todo, ind) => {
      if (todo.id === id) {
        this.todoArr.splice(ind, 1);
      }
      this.todoSubject.next([...this.todoArr]);
    });
  }
}
