import { HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsApiService } from 'src/services/posts-api-service/posts-api.service';
import { PostsListComponent } from './posts-list.component';
import { PostCardComponent } from './post-card/post-card/post-card.component';

@NgModule({
  declarations: [PostsListComponent, PostCardComponent],
  providers: [PostsApiService],
  imports: [CommonModule, HttpClientModule],
  bootstrap: [PostsListComponent],
})
export class PostsListModule {}
