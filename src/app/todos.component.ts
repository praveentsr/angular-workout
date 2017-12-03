import { Component, OnInit } from '@angular/core';
import { Todos } from './todos';
import { TodoService } from './todos.service'
import { Location } from '@angular/common';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class ToDosComponent implements OnInit {
  todosList: Todos[];

  constructor(
      private todoService: TodoService,
      private location: Location
    ) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
    .subscribe(todosList => this.todosList = todosList);
  }
  goBack(): void {
    this.location.back();
  }
}