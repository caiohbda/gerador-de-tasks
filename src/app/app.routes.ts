import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TaskPageComponent } from './components/task-page/task-page.component';

export const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"taskpage", component: TaskPageComponent }
];
