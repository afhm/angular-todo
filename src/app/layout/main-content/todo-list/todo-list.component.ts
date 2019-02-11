import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  TodoService
} from './todo.service';
import {
  Todo
} from './todo.model';
import {
  Subscription
} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {

  todos: Todo[];

  private subscription: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.subscription = this.todoService.todosChanged
      .subscribe(
        (todos: Todo[]) => {
          this.todos = todos;
        }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  onEditTodo(index: number) {
    this.todoService.getTodo(index).editing = true;
    this.todoService.startedEditing.next(index);
  }

  onDelete(deleteIndex) {
    this.todoService.deleteTodo(deleteIndex);
  }

}
