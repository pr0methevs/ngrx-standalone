import { TodoModel } from '../../../models/todo.model';

export interface TodoState {
  todos: TodoModel[];
  // loading: boolean;
  // error: string | null;
}
