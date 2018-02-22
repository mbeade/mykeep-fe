import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  public isEditing = false;
  constructor(private todoService: TodoService) { }

  @ViewChild('todoInput') input: ElementRef;
  @ViewChild('todoLabel') label: ElementRef;

  @Input('item') item;
  @Output() updateItem: EventEmitter<Todo> = new EventEmitter();
  @Output() deleteItem: EventEmitter<Todo> = new EventEmitter();

  updateExistentItem() {
    this.updateItem.emit(this.item);
  }

  editing() {
    console.log('giving Focus');
    this.isEditing = true;
    setTimeout(() => { this.input.nativeElement.select(); }, 50);
  }

  saveItem() {
    console.log('saving');
    this.isEditing = false;
    this.updateItem.emit(this.item);
  }

  removeItem(item) {
    this.deleteItem.emit(this.item);
  }

}

