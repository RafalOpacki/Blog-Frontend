import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'src/services/toast-service/toast.service';
import { Post } from 'src/models/post';
import { PostsApiService } from 'src/services/posts-api-service/posts-api.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
})
export class PostPageComponent implements OnInit {
  post$: Post;
  isFormVisible: boolean = false;
  isLoading: boolean = true;
  isDeleteModalVisible: boolean = false;

  constructor(
    private _postsApiService: PostsApiService,
    private _router: Router,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getPostData();
  }

  getPostData() {
    const id: string = this._router.url.substring(1);
    this._postsApiService.getById(id).subscribe(
      (data: Post) => {
        this.post$ = data;
        this.isLoading = false;
      },
      (error: HttpErrorResponse) =>
        this._toastService.showErrorMessage(error.error.message)
    );
  }

  handleDelete() {
    interface Message {
      message: string;
    }
    const postId = this.post$._id;

    this._postsApiService.deletePost(postId).subscribe(
      (data: Message) => {
        this._postsApiService.showSuccessMessage(data.message);
        this._router.navigate(['/']);
      },
      (error: HttpErrorResponse) =>
        this._toastService.showErrorMessage(error.message)
    );
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  toggleConfirmModal() {
    this.isDeleteModalVisible = !this.isDeleteModalVisible;
  }
}
