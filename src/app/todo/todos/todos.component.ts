import { Component, OnInit } from '@angular/core';
import {Todo} from '../share/todo.model';
import {interval} from 'rxjs/observable/interval';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  newText = '';
  todos: Todo[];
  today: Date = new Date();
  counter = interval(5000);

  constructor() {
    this.todos = [
      { done: false, text: '운동하기'},
      { done: true, text: '공부하기'}
    ];
    this.counter.subscribe(number => {
      this.today = new Date();
    });
  }

  ngOnInit() {
  }

  toggleTodo(todo) {
    todo.done = !todo.done;
  }

  addTodo(text: string) {
    this.todos.push({
      done: false,
      text: text
    });
  }

  changeTime(): void {

  }
}
