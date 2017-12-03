import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Todos } from './todos';

@Injectable()
export class TodoService {

  private todoUrl = 'https://jsonplaceholder.typicode.com/todos?userId=';

constructor(private _http: Http){}
  /** GET heroes from the server */
  getTodos (): Observable<Todos[]> {   
      return this._http.get(this.todoUrl)
      .map((response: Response) => <Todos[]> response.json())
      .do(todosList => console.log(JSON.stringify(todosList)));
   }
  }