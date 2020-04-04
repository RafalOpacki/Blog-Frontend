import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// services
import { PostsApiService } from 'src/services/posts-api-service/posts-api.service';
import { BackToTopService } from 'src/services/back-to-top-service/back-to-top.service';
// components
import { PostsListComponent } from './posts-list.component';
import { PostCardComponent } from './post-card/post-card/post-card.component';
import { PaginationComponent } from '../pagination/pagination/pagination.component';
import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
  declarations: [
    PostsListComponent,
    PostCardComponent,
    PaginationComponent,
    PostPageComponent,
  ],
  providers: [PostsApiService, BackToTopService],
  imports: [CommonModule, HttpClientModule, RouterModule],
  bootstrap: [PostsListComponent],
})
export class PostsListModule {}
