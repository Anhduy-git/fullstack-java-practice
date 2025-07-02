import { DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean = false,
    public targetDate: Date = new Date()
  ) {}
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor, DatePipe, UpperCasePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit{

  todos = [
    new Todo(1, 'Learn Angular', false, new Date()),
    new Todo(2, 'Learn React', false, new Date()),
    new Todo(3, 'Learn Vue', false, new Date()),
    new Todo(4, 'Learn Node.js', false, new Date()),
  ]

  todo = {
    id: 1,
    description: 'Learn to dance'
  }

  constructor() {

  }

  ngOnInit() {

  }

}
