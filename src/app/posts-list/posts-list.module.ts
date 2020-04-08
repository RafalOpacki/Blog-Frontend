// modules
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// services
import { PostsApiService } from 'src/services/posts-api-service/posts-api.service';
import { BackToTopService } from 'src/services/back-to-top-service/back-to-top.service';
import { ToastrService } from 'ngx-toastr';
import { ToastService } from 'src/services/toast-service/toast.service';
// components
import { PostsListComponent } from './posts-list.component';
import { PostCardComponent } from './post-card/post-card/post-card.component';
import { PaginationComponent } from '../pagination/pagination/pagination.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ButtonComponent } from './../button/button.component';
import { ConfirmModalComponent } from './../confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    PostsListComponent,
    PostCardComponent,
    PaginationComponent,
    PostPageComponent,
    PostFormComponent,
    ButtonComponent,
    ConfirmModalComponent,
  ],
  providers: [PostsApiService, BackToTopService, ToastrService, ToastService],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  bootstrap: [PostsListComponent],
})
export class PostsListModule {}
