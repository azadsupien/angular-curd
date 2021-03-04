import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';


const url = 'http://127.0.0.1:8000/api/todos/';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) {  }
  //get all list
  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(url);
  }

  //get specific list use id
  get(id: any): Observable<Tutorial> {
    return this.http.get(`${url}/${id}`);
  }

  //create the data(list)
  create(data: any): Observable<any> {
    return this.http.post(url, data);
  }

  //update the list
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/${id}`, data);
  }

  //delete the specific list use id,
  delete(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }

  //delete all list
  deleteAll(): Observable<any> {
    return this.http.delete(url);
  }

  //find the specific list use title
  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${url}?title=${title}`);
  }


}