import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path:'', component:AppComponent},
  { path:'index.html', component:AppComponent},
  { path:'index', component:AppComponent},
  { path: 'todos', component: TodoListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }