import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import types from './constants/';
import actions from './actions/';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Observable<any>;
  title: string = 'A todo app';

  constructor(private store: Store<any>) {
    this.todos = store.select('reducer');
  }

  addTodo(value) {
    this.store.dispatch(actions.submitTodo(value));
  }
  deleteTodo(value) {
    this.store.dispatch(actions.deleteTodo(value));
  }
}
