import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { PostsApiService } from 'src/services/posts-api-service/posts-api.service';
import { Pageable } from 'src/models/pageable';
import { BackToTopService } from 'src/services/back-to-top-service/back-to-top.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts$: Array<Post> = [];
  pageableData$: Pageable = null;

  constructor(
    private _postApiService: PostsApiService,
    private _backToTopService: BackToTopService
  ) {}

  ngOnInit() {
    this._postApiService.getAllPosts(1).subscribe((data) => {
      this.posts$ = data.posts;
      this.pageableData$ = data.pageable;
    });
  }

  changePage(currentPageData: Number) {
    this._postApiService.getAllPosts(currentPageData).subscribe((data) => {
      this.posts$ = data.posts;
      this.pageableData$ = data.pageable;
    });
    this._backToTopService.backToTop();
  }
}
