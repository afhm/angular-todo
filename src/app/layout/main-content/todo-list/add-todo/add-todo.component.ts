import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from './../todo.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-add-todo',
	templateUrl: './add-todo.component.html',
	styleUrls: [ './add-todo.component.scss' ]
})
export class AddTodoComponent implements OnInit, OnDestroy {
  
  subscription: Subscription;
  editMode = false;
  editedTodoIndex: number; 

  public show:boolean = false;


	constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.subscription = this.todoService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedTodoIndex = index;
          this.editMode = true;
        }
      );
  }
  
  onAddTodo(form: NgForm) {
    const value = form.value;
    const newTodo = new Todo(value.time,value.task,value.project);
    this.todoService.addTodos(newTodo);
  }

  toggle() {
    this.show = !this.show;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
