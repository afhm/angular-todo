import { Todo } from './todo.model';
import { Subject } from 'rxjs';

export class TodoService {
    todosChanged = new Subject<Todo[]>();
    startedEditing = new Subject<number>();
	private todos: Todo[] = [
        new Todo('4 am','asdsa','asdsa')
    ];
    
    getTodos() {
        return this.todos.slice();
    }

    addTodos(todo:Todo) {
        this.todos.push(todo);
        this.todosChanged.next(this.todos.slice()); 
    }
}
