import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '../models';

@Injectable({providedIn: 'root'})
export class ToDoService {
  constructor(protected $http: HttpClient) {}

  private baseAddress: string = 'https://jsonplaceholder.typicode.com/todos';

  getToDos$() : Observable<ToDo[]> {
    return this.$http.get<ToDo[]>(this.baseAddress);
  }

  saveToDo$(todo: ToDo) : Observable<ToDo> {
    if (todo.id) {
      return this.$http.put<ToDo>(`${this.baseAddress}/${todo.id}`, todo);
    }
    else {
      return this.$http.post<ToDo>(this.baseAddress, todo);
    }
  }

  deleteToDo$(id: number) : Observable<Response> {
    return this.$http.delete<Response>(`${this.baseAddress}/${id}`);
  }
}
