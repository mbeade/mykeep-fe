
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TodoService {

    private readonly API_BASE_URL = 'http://localhost:3000';
    private $todoListObservable: Subject<any>;

    constructor(private http: HttpClient) {
        this.$todoListObservable = new Subject<any>();
    }

    public getTodoListFromApi(): Observable<TodoList[]> {
        return this.http.get<TodoList[]>(`${this.API_BASE_URL}/api/todoList`);
    }
    public getTodoListFromApiById(id: string): Observable<TodoList> {
        return this.http.get<TodoList>(`${this.API_BASE_URL}/api/todoList/${id}`);
    }

    public postTodoList(listName: string): Observable<any> {
        return this.http.post(`${this.API_BASE_URL}/api/todoList`, { listName: listName });
    }

    public putList(todoList: TodoList): Observable<any> {
        return this.http.put(`${this.API_BASE_URL}/api/todoList/${todoList._id}`, todoList);
    }

    public deleteList(todoList: TodoList): Observable<any> {
        return this.http.delete(`${this.API_BASE_URL}/api/todoList/${todoList._id}`);
    }

    public refreshTodoList() {
        this.getTodoListFromApi().subscribe((result) => {
            this.$todoListObservable.next(result);
        });
    }

    public getTodoListAsObservable() {
        return this.$todoListObservable.asObservable();
    }
}

