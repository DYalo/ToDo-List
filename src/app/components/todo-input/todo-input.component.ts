import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  public todoText: string;
  public todoDate: Date;

  constructor(private todoService: TodoService) {
  	this.todoText = '';
   }

  ngOnInit() {
  }
  private addTodo(): void {
  		this.todoService.addTodo(this.todoText, this.todoDate);
  		this.todoText = '';
     
  }
}
