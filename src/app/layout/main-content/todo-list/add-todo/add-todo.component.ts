import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from './../todo.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-add-todo',
	templateUrl: './add-todo.component.html',
	styleUrls: [ './add-todo.component.scss' ]
})
export class AddTodoComponent implements OnInit {
   

  showw = false;
  @ViewChild('todoForm') todoForm: NgForm;

	constructor(private todoService: TodoService) {}

  ngOnInit() {
  }
  
  onAddTodo(form: NgForm) {
    const value = form.value;
    const newTodo = new Todo(value.time,value.task,value.project,false);
    this.todoService.addTodos(newTodo);
    this.showw = false;
    form.reset();
  }

  toggle() {
    this.showw = !this.showw;
  }

  onclose() {
    this.todoForm.reset();
    this.showw = false;
  }
}
