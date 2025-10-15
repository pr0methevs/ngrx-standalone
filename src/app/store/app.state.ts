import { TodoState } from '../features/todo/state/todo.state';

/**
* Defines the shape of global application state
 * This file acts as a single source of truth for what your store looks like, making it easier to reason about and maintain
 * Each feature's state is represented as a property on the AppState interface
 * This modular approach allows for better organization and scalability as the app grows
*/
export interface AppState {
  todo: TodoState
}
