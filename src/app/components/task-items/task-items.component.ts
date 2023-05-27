import { Component, OnInit, Input } from '@angular/core';
import {Task } from '../../Task';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent {
@Input() task!: Task
}
