import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import * as _ from 'lodash';
import { element } from 'protractor';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  public isEditing: boolean;
  @Input('todoList') todoList: TodoList;
  @ViewChild('listName') listName: ElementRef;
  @ViewChild('list', { read: ElementRef }) listElement: ElementRef;
  public editing = false;
  public counter = 0;

  constructor(private todoService: TodoService) { }

  public addNewItem() {
    this.todoList.todos.push(
      { isDone: false, todo: `New item ${this.counter++}` }
    );
    this.updateList();
  }

  public updateList() {
    this.editing = true;
    this.todoService.putList(this.todoList).subscribe((result) => {
      this.editing = false;
    }, (err) => {
      this.editing = false;
      console.log(`error al actualizar${JSON.stringify(err)}`);
    });
  }

  public updateItem(item: Todo) {
    item.isDone = item.isDone;
    item.todo = item.todo;
    this.updateList();
  }

  public markAllDone() {
    this.todoList.todos.forEach((e) => { e.isDone = true; });
    this.updateList();
  }

  public edit() {
    this.isEditing = true;
    setTimeout(() => { this.listName.nativeElement.select(); }, 50);
  }

  public saveList() {
    this.isEditing = false;
    this.updateList();
  }

  public deleteItem(item: Todo) {
    const index = _.findIndex(this.todoList.todos, (e) => {
      return item.todo === e.todo;
    });
    this.todoList.todos.splice(index, 1);
    this.updateList();
  }

  markAsImportant() {
    this.todoList.isImportant = true;
    this.updateList();
  }

  deleteList() {
    this.todoService.deleteList(this.todoList).subscribe(() => {
      console.log('Delete success');
      this.todoService.refreshTodoList();
    });
  }
}
