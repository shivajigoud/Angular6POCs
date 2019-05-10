import {ITodo} from "./todos";
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, REMOVE_ALL_TODOS} from './todo.actions';
import { _INITIAL_STATE } from "../../../node_modules/@ngrx/store";

export interface IAppState{
    todos:ITodo[];
    lastUpdate:Date
}

export const INITIAL_STATE: IAppState = {
    todos:[],
    lastUpdate:new Date()
}
var counter:number=0;
export function todoReducer(state=INITIAL_STATE,action){
        switch(action.type){
            case ADD_TODO:
                return Object.assign({},state,{
                    todos:state.todos.concat(Object.assign({},action.todo,{id:++counter})),
                    lastUpdate:new Date()
                })
            case TOGGLE_TODO:
                let todo = state.todos.find((t)=>t.id == action.id);
                let index = state.todos.indexOf(todo);
                return Object.assign({},state,{
                    todos:[
                        ...state.todos.slice(0,index),
                        Object.assign({},todo,{isCompleted:!todo.isCompleted}),
                        ...state.todos.slice(index+1)
                    ],
                    lastUpdate:new Date()
                })
            case REMOVE_TODO:
                let removeTodo = state.todos.find((t)=>t.id == action.id);
                let removeIndex = state.todos.indexOf(removeTodo);
                let newTodos = state.todos.slice(removeIndex+1).map(todo=>{todo.id=todo.id-1; return todo});
                counter--;
                return Object.assign({},state,{
                    todos:[...state.todos.slice(0,removeIndex),...newTodos],
                    lastUpdate:new Date()
                })
            case REMOVE_ALL_TODOS:
                counter=0;
                return Object.assign({},state,{
                    todos:[],
                    lastUpdate:new Date()
                })
            default:
                return state;
        }
}

