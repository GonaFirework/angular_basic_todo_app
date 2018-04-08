import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../share/todo.model';

@Component({
  selector: 'app-todo',
  template: `
    <input type="checkbox" [checked]="todo.done"> <label>{{ todo.text }}</label> <button class="todo_delete_button" (click)="deleteTodo(todo)">-</button>
  `,
  styles: [`
      :host{
        display: block;
        padding: 16px;
        color: darkgray;
        background-color: white;
      }
      input {
        position: relative;
      }
    input:before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: white;
      border-radius: 20px;
      position: absolute;
      top: -6px;
      left: -8px;
      border: 1px solid dimgray;
    }
    input:checked:after {
      content: '\\2713'; 
      display: inline-block;
      font-size: 18px;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      position: absolute;
      top: -6px;
      left: -8px;
      border: 1px solid dimgray;
      background-color: dimgray;
      text-align: center;
      color: white;
    }
    input:checked + label {
      text-decoration: line-through;
    }  
    button.todo_delete_button {
      background-color: red;
    }
  `]
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() onTodoDeleted = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteTodo(todo: Todo) {
    this.onTodoDeleted.emit(todo);
  }
}
