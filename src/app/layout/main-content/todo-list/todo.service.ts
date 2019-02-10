import { Todo } from './todo.model';
import { Subject } from 'rxjs';

export class TodoService {
    todosChanged = new Subject<Todo[]>();
    startedEditing = new Subject<number>();
    
	private todos: Todo[] = [
        new Todo('4:00 am','asdsa','asdsa')
    ];
    
    getTodos() {
        return this.todos.slice();
    }
    getTodo(index: number) {
        return this.todos[index];
    }

    addTodos(todo:Todo) {
        this.todos.push(todo);
        this.todosChanged.next(this.todos.slice()); 
    }
    updateTodo(index: number,newTodo: Todo) {
        this.todos[index] = newTodo;
        this.todosChanged.next(this.todos.slice());
    }
    deleteTodo(index:number) {
        this.todos.splice(index,1);
        this.todosChanged.next(this.todos.slice());
    }
}
