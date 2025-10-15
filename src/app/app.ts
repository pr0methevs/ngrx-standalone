import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { TodoModel } from './models/todo.model';
import { selectAllTodos } from './features/todo/state/todo.selectors';
import { CommonModule } from '@angular/common';
import { Todo } from './features/todo/todo';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Todo
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todos$!: Observable<TodoModel[]>;

  protected readonly title = signal('ngrx-standalone');

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectAllTodos);
  }
}
