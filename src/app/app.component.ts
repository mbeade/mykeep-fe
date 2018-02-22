import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  todoLists: TodoList[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getAllTodoListsFromAPI();
  }

  public addNewList() {
    this.todoService.postTodoList('New List!').subscribe(() => {
      this.todoService.refreshTodoList();
      console.log('Success created!');
    }, (err) => {
      console.log(`error al crear${JSON.stringify(err)}`);
    });
  }

  getAllTodoListsFromAPI() {
    this.todoService.refreshTodoList();
    this.todoService.getTodoListAsObservable().subscribe((list) => {
      this.todoLists = list;
    });
  }
}


