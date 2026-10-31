import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task';

export const addTask = createAction('Add Task', props<{ newTask: Task }>());
export const deleteTask = createAction('Delete Task', props<{ id: number }>());
export const toggleTask = createAction('Toggle Task', props<{ id: number }>());
