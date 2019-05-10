import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from '../todos';
import { IAppState, INITIAL_STATE, todoReducer } from '../todo.store'; 
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  model:ITodo={
    id:0,
    description:"",
    responsible:"",
    priority:"low",
    isCompleted:false
  }
  todos:Array<ITodo>;
  todosLength:number;
 
  constructor(private todoStore:Store<any>) { 
       this.todoStore.select('apptodos').subscribe((state)=>{ 
       this.todos = state.todos;
       this.todosLength = state.todos.length;
    });
  }
  ngOnInit() {
  }
  onSubmit(){
    this.todoStore.dispatch({type:todoActions.ADD_TODO,todo:this.model})
  }
  toggleTodo(todo){
    this.todoStore.dispatch({type:todoActions.TOGGLE_TODO,id:todo.id})
  }
  removeTodo(todo){
    this.todoStore.dispatch({type:todoActions.REMOVE_TODO,id:todo.id})
  }
}
