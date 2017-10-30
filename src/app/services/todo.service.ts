import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo'
@Injectable()
export class TodoService {

	
	private nextId: number;
  private date: Date;

  constructor() {
   let todos = this.getTodos();

   if(todos.length == 0) {
       this.nextId =0;
   } else {
       let maxId = todos[todos.length - 1].id;
       this.nextId = maxId + 1; 
   }
 }

   	public addTodo(text: string, date: Date): void {
   		  
   			let todo = new Todo(this.nextId, text, this.date);
   			let todos = this.getTodos();
        todos.push(todo);

        this.setLocaleStorageTodos(todos);
   			this.nextId++;
   	}

   	public getTodos(): Todo[] {
   			let localStorageItem = JSON.parse(localStorage.getItem('todos'));
         return localStorageItem == null ? [] :localStorageItem.todos;
   	}

   	public removeTodo(id: number): void {
        let todos = this.getTodos();
   			todos = todos.filter((todo)=>todo.id !== id );
        this.setLocaleStorageTodos(todos);
   	}


    private setLocaleStorageTodos(todos: Todo[]): void {
        localStorage.setItem('todos', JSON.stringify({todos: todos}));
    }
}