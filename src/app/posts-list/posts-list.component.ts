import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { PostsApiService } from 'src/services/posts-api-service/posts-api.service';
import { Pageable } from 'src/models/pageable';
import { BackToTopService } from 'src/services/back-to-top-service/back-to-top.service';
import { ToastService } from 'src/services/toast-service/toast.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts$: Array<Post> = [];
  pageableData$: Pageable = null;
  isLoading: boolean = true;
  inputValue: string;
  isNothingFoundMessageVisible: boolean = false;

  constructor(
    private _postApiService: PostsApiService,
    private _backToTopService: BackToTopService,
    private _toastService: ToastService
  ) {}

  ngOnInit() {
    this._postApiService.getAllPosts(1).subscribe((data) => {
      this.posts$ = data.posts;
      this.pageableData$ = data.pageable;
      this.isLoading = false;
    });
  }

  changePage(currentPageData: number) {
    this._backToTopService.backToTop();
    this._postApiService.getAllPosts(currentPageData).subscribe((data) => {
      this.posts$ = data.posts;
      this.pageableData$ = data.pageable;
    });
  }

  searchPosts(value: string) {
    this.inputValue = value;
    this._postApiService.searchPosts(this.inputValue).subscribe(
      (data) => {
        this.posts$ = data.posts;
        this.pageableData$ = data.pageable;
        if (data.posts.length === 0) {
          this.isNothingFoundMessageVisible = true;
        } else {
          this.isNothingFoundMessageVisible = false;
        }
      },
      (error) => this._toastService.showErrorMessage('Something went wrong')
    );
  }
}
