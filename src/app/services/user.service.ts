import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    private readonly API_BASE_URL = 'http://localhost:3000';
    private $todoListObservable: Subject<any>;

    constructor(private http: HttpClient) {
        this.$todoListObservable = new Subject<any>();
    }

    public login(user: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.API_BASE_URL}/api/login`, { username: user, password: password });
    }

}