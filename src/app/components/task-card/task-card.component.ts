import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  imports: [
    CommonModule
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {

  @Input() task!: { title: string};

  concluido = false;
  removido = false;

  concluir() {
    this.concluido = true;
  }

  remover() {
    this.removido = true
  }
}
