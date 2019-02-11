import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {
  Subscription
} from 'rxjs';

import {
  TodoService
} from '../todo.service';
import {
  Todo
} from '../todo.model';
import {
  NgForm
} from '@angular/forms';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit, OnDestroy {

  @ViewChild('editTodoForm') editTodoForm: NgForm;


  subscription: Subscription;
  editMode = false;
  editedTodoIndex: number;
  editedTodo: Todo;


  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.subscription = this.todoService.startedEditing
      .subscribe(
        (index: number) => { // enter this anonymous function if startedEditing was triggered
          this.editedTodoIndex = index;
          this.editMode = true;
          console.log("inised edit");
          this.editedTodo = this.todoService.getTodo(index);
          this.editTodoForm.setValue({
            time: this.editedTodo.taskTime,
            task: this.editedTodo.taskDesc,
            project: this.editedTodo.taskProject
          })
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newTodo = new Todo(value.time, value.task, value.project,false);
    this.todoService.updateTodo(this.editedTodoIndex, newTodo);
    this.editMode = false;
    form.reset();
  }

  onclose() {
    this.editMode = false;
    // this.editedTodo.editing = false;
    
  }


}
