import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import { AppState } from '../app.state'; 
import * as TutorialActions from '../actions/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model={
    id:1,
    name:"",
    url:""
  }
  constructor(private store:Store<any>) { }
  counter =1;
  addTutorial(name,url){
    this.store.dispatch(new TutorialActions.AddTutorial({id:++this.counter,name:name.value,url:url.value}));
    this.model={
      id:1,
      name:"",
      url:""
    }
  }
  ngOnInit() {
  }

}
