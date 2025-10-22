import { Component } from '@angular/core';
import { AsyncPipe } from "@angular/common";
import { Observable } from 'rxjs';
import { TodoModel } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import { selectAllTodos } from './state/todo.selectors';
import { FormsModule } from '@angular/forms';
import { createTodo } from './state/todo.actions';

@Component({
  selector: 'app-todo',
  imports: [
    AsyncPipe,
    FormsModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class Todo {
  todos$!: Observable<TodoModel[]>;
  newTodoTitle: string = '';

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectAllTodos);
  }


  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: TodoModel = {
        id: Date.now(),
        title: this.newTodoTitle,
        completed: false
      };
      this.store.dispatch(createTodo(newTodo));
      this.newTodoTitle = '';
    }
  }

}
