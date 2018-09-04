import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, State, _INITIAL_STATE } from '@ngrx/store';
import { ITodo } from '../todos';
import { IAppState, INITIAL_STATE, todoReducer } from '../todo.store'; 
import * as todoActions from '../todo.actions';
@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {
  todos:any;
  lastUpdated:any;
  completedTodos:any;
  constructor(private todoStore:Store<any>,public todoState:State<IAppState>) {
   this.todoStore.select('apptodos').subscribe((state)=>{ 
     this.todos = state.todos.length;
     this.lastUpdated = state.lastUpdate;
     this.completedTodos = state.todos.filter(todo=>todo.isCompleted).length;
    });
    //this.todoStore.select((state)=>{ this.lastUpdated = state.apptodos.lastUpdate});
   }
  ngOnInit() {
    
   
  }
  clearAllTodos(){
    this.todoStore.dispatch({type:todoActions.REMOVE_ALL_TODOS});
    
  }
}
