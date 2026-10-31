import { countReducer } from '../reducers/counter.reducer';
import { taskReducer } from '../reducers/task.reducer';

export const myStore = {
  countData: countReducer,
  taskData : taskReducer
};
