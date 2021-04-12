import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../classes/post';

const API_URL = 'https://dry-bastion-69323.herokuapp.com/api/user/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPostByUser(idUser:number): Observable<any> {
    return this.http.get<Array<Post>>(API_URL + idUser + '/posts');
  }
}
