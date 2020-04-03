import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { PostsApiService } from 'src/services/posts-api-service/posts-api.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts$: Array<Post> = [];

  constructor(private _apiService: PostsApiService) {}

  ngOnInit() {
    this._apiService.getAllPosts().subscribe((data) => (this.posts$ = data));
  }
}
