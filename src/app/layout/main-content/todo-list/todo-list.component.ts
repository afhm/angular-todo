import { Component, OnInit } from '@angular/core';
import {Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  hidden:boolean = true;
  
  inputValue:string = '';

  todos = [];

  addTaskBtn(taskTime,taskDescr,taskProject){

    if(this.hidden == true){
      this.hidden = false;
    }
    else{

      this.todos.push({ taskTime,taskDescr,taskProject });

      this.inputValue = null;
      
      console.log(this.todos);


      this.hidden = true;
    }


  }


  

  constructor() { }

  ngOnInit() {
  }

}
