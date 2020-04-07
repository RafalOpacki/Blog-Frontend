import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;
  content: string = '';

  constructor() {}

  ngOnInit(): void {
    this.content = this.post?.content.substring(0, 400);
  }
}
