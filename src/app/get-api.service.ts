import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetApiService {

  constructor(private http : HttpClient) { }

  //link to user api
  getContact(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
  //link to todos api
  getTask(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');
  }
}
