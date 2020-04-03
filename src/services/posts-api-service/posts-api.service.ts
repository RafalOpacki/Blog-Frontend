import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  getAllEndpoint = 'http://localhost:3000/posts/getAll';
  posts$: Post[] = [];

  constructor(private _http: HttpClient) {}

  getAllPosts() {
    return this._http.get<Post[]>(this.getAllEndpoint);
  }
}
