import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { TodoState } from './todo.state';

const initialState: TodoState = {
  todos: [
    {id: 1, title: "Learn NgRx", completed: false}
  ],
}

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.createTodo, (state, { id, title, completed }) => {
    return {
      ...state,
      todos: [...state.todos, { id, title, completed }]
    };
  })
);
