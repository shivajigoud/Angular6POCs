import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxRouteModule } from './ngrx-route/ngrx-route.module';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { reducer } from './reducers/tutorial.reducer';
import { todoReducer } from './todo.store';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgrdpocHomeComponent } from './ngrdpoc-home/ngrdpoc-home.component';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      tutorial:reducer,
      apptodos:todoReducer
    }),
    FormsModule,
    NgrxRouteModule
  ],
  declarations: [
    ReadComponent,
    CreateComponent,
    TodoOverviewComponent,
    TodoListComponent,
    NgrdpocHomeComponent,
  ]
})
export class NGRXPocModule { }
