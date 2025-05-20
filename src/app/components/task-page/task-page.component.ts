import { Component } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskFormComponent } from "../task-form/task-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-page',
  imports: [
    TaskCardComponent,
    TaskFormComponent,
    CommonModule
  ],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent {
  tasks: { title: string}[] = []

  addTask(task: { title: string}) {
    this.tasks.push(task)
  }
}
