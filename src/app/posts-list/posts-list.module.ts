import { HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsApiService } from 'src/services/posts-api-service/posts-api.service';
import { PostsListComponent } from './posts-list.component';

@NgModule({
  declarations: [PostsListComponent],
  providers: [PostsApiService],
  imports: [CommonModule, HttpClientModule],
  bootstrap: [PostsListComponent],
})
export class PostsListModule {}
