import { createReducer, on } from '@ngrx/store';
import { addTask, deleteTask, toggleTask } from '../actions/task.actions';

const initialState = [
  { id: 1, text: 'Learn javascript', isCompleted: true },
  { id: 2, text: 'Go to Gym', isCompleted: false },
  { id: 3, text: 'Buy Grocery', isCompleted: false },
];
export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, action: any) => {
    return [...state, action.newTask];
  }),
  on(deleteTask, (state, action: any) => {
    return state.filter((Task) => Task.id != action.id);
  }),
  on(toggleTask, (state, action: any) => {
    return state.map((Task) => {
      return Task.id !== action.id ? Task : { ...Task, isCompleted: !Task.isCompleted };
    });
  }),
);
