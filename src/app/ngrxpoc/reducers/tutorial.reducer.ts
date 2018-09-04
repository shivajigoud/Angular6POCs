import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.action';

const initialState:Tutorial = {
    id:1,
    name:'Angular Tutorial',
    url:'https://angular.io/tutorial'
};
export function reducer(state:Tutorial[]=[initialState], action:TutorialActions.Actions){
    switch(action.type){
        case TutorialActions.ADD_TUTORIAL:
        console.log(`add tutorial${JSON.stringify(state)}`);
        return [...state,action.payload]
            //return [...state,action.payload];
        default:
            return state;
    }
}