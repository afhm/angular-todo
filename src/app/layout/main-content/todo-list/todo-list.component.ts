import { Component, OnInit } from '@angular/core';
import {Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [
    new Todo(5,'This is a test todo','programming'),
    new Todo(5,'This is a test todo','programming'),

    
  ];

  constructor() { }

  ngOnInit() {
  }

}
