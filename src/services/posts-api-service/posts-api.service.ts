import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/services/toast-service/toast.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PostsApiDataType } from 'src/models/postsApiDataType';
import { Post } from 'src/models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  constructor(
    private _http: HttpClient,
    private _toastService: ToastService,
    private _router: Router
  ) {}
  backendAPI: string = 'https://nodejs-blog-backend.herokuapp.com';

  limit: number = 10;

  showSuccessMessage(content: string) {
    this._toastService.showSuccessMessage(content);
  }

  showErrorMessage(content: string) {
    this._toastService.showErrorMessage(content);
  }

  // GET ALL

  getAllEndpoint = (page: number): string =>
    `${this.backendAPI}/posts/getAll?limit=${this.limit}&page=${page}`;

  getAllPosts(pageNumber: number) {
    return this._http.get<PostsApiDataType>(this.getAllEndpoint(pageNumber));
  }

  // GET BY ID

  getByIdEndpoint = (id: string) => `${this.backendAPI}/posts/get/${id}`;

  getById(id: string) {
    return this._http.get<Post>(this.getByIdEndpoint(id));
  }

  // ADD NEW

  addNewPostEndpoint = `${this.backendAPI}/posts/addPost`;

  addNewPost(post: Post) {
    const formBody = post;

    this._http.post(this.addNewPostEndpoint, formBody).subscribe(
      (data: PostsApiDataType) => {
        this.showSuccessMessage(data.message);
        this._router.navigate(['/']);
      },
      (error: HttpErrorResponse) => this.showErrorMessage(error.error.message)
    );
  }

  // EDIT POST

  editPostEndpoint = (postId: string) =>
    `${this.backendAPI}/posts/edit/${postId}`;

  editPost(postId: string, post: Post) {
    const formBody = post;

    return this._http.patch(this.editPostEndpoint(postId), formBody);
  }
}
