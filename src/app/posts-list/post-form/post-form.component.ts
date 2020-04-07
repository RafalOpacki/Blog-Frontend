import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsApiService } from 'src/services/posts-api-service/posts-api.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  constructor(
    private _postsApiService: PostsApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const formData = form.value;
    this._postsApiService.addNewPost(formData);
  }

  onCancel() {
    this._router.navigate(['/']);
  }
}
