import { Component, signal } from '@angular/core';
import { AsyncPipe } from "@angular/common";
import { Observable } from 'rxjs';
import { TodoModel } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import { selectAllTodos } from './state/todo.selectors';

@Component({
  selector: 'app-todo',
    imports: [
        AsyncPipe
    ],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  todos$!: Observable<TodoModel[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectAllTodos);
  }

}
