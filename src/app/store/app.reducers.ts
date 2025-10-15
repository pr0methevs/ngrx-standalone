import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from '../features/todo/state/todo.reducer';
import { AppState } from './app.state';

/** Combines all feature reducers into a single root reducer map for the application.
 * This map is used to configure the store with the standalone API.
 * Each feature's reducer is assigned to a property on the AppState interface,
 * allowing for modular and organized state management.
 *
 * It imports all feature reducers (like todoReducer) and the AppState interface
 * It exports a constant (commonly called reducers) of type ActionReducerMap<AppState>
 * This map tells NgRx how to update each slice of the state in response to actions
 * It is used in the app’s configuration(app.config.ts) to provide the root reducers to the store
 */
export const reducers: ActionReducerMap<AppState> = {
  todo: todoReducer
}
