import { createAction, props } from '@ngrx/store';
import { TodoModel } from '../../../models/todo.model';

export const createTodo = createAction(
  '[TODO] Create Todo',
  props<TodoModel>()
)
