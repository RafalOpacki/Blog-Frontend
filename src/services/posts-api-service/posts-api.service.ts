import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsApiDataType } from 'src/models/postsApiDataType';
import { Post } from 'src/models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  limit: Number = 10;

  constructor(private _http: HttpClient) {}

  getAllEndpoint = (page: Number): string =>
    `http://localhost:3000/posts/getAll?limit=${this.limit}&page=${page}`;

  getAllPosts(pageNumber: Number) {
    return this._http.get<PostsApiDataType>(this.getAllEndpoint(pageNumber));
  }

  getByIdEndpoint = (id: String) => `http://localhost:3000/posts/get/${id}`;

  getById(id: String) {
    return this._http.get<Post>(this.getByIdEndpoint(id));
  }
}
