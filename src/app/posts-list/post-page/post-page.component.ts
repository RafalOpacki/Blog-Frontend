import { Post } from 'src/models/post';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsApiService } from 'src/services/posts-api-service/posts-api.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
})
export class PostPageComponent implements OnInit {
  post$: Post;

  constructor(
    private _postsApiService: PostsApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const id: String = this._router.url.substring(1);
    this._postsApiService.getById(id).subscribe((data) => {
      this.post$ = data;
    });
  }
}
