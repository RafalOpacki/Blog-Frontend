import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { EditResponseApiDataType } from 'src/models/postsApiDataType';
import { PostsApiDataType } from 'src/models/postsApiDataType';
import { Post } from 'src/models/post';
import { PostsApiService } from 'src/services/posts-api-service/posts-api.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Input() isEditing = false;
  @Input() post: Post;
  @Output() toggleForm: EventEmitter<void> = new EventEmitter();
  @Output() getPostData: EventEmitter<void> = new EventEmitter();

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  newPostTags: string[] = [];
  arrayOfTags: string[];
  formTitle: string;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private _postsApiService: PostsApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.arrayOfTags = this.isEditing ? this.post?.tags : this.newPostTags;
    this.formTitle = this.isEditing ? 'Edit post' : 'Add new post';
  }

  onSubmit(form: NgForm) {
    const formData = { ...form.value, tags: this.arrayOfTags };
    if (this.isEditing) {
      this._postsApiService.editPost(this.post._id, formData).subscribe(
        (data: EditResponseApiDataType) => {
          this._postsApiService.showSuccessMessage(data.message);
          this.toggleForm.emit();
          this.getPostData.emit();
        },
        (error: HttpErrorResponse) =>
          this._postsApiService.showErrorMessage(error.error.message)
      );
    } else {
      this._postsApiService.addNewPost(formData);
    }
  }

  onCancel() {
    if (this.isEditing) {
      this.toggleForm.emit();
    } else {
      this._router.navigate(['/']);
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.arrayOfTags.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    const index = this.post?.tags.indexOf(tag);

    if (index >= 0) {
      this.post?.tags.splice(index, 1);
    }
  }
}
