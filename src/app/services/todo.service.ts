import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo'
@Injectable()
export class TodoService {

	private todos: Todo[];
	private nextId: number;
  private date: Date;

  constructor() {
  	this.todos = [
  		new Todo(0, "LOL", new Date(23,12,2017))
  	];
 

   this.nextId = 3;
 }
   	public addTodo(text: string, date: Date): void {
   		  
   			let todo = new Todo(this.nextId, text, this.date);
   			this.todos.push(todo);
   			this.nextId++;
   	}

   	public getTodos(): Todo[] {
   			return this.todos;
   	}

   	public removeTodo(id: number): void {
   			this.todos = this.todos.filter((todo)=>todo.id !== id );
   	}
}