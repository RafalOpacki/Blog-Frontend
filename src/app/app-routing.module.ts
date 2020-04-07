import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostPageComponent } from './posts-list/post-page/post-page.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostFormComponent } from './posts-list/post-form/post-form.component';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
  },
  {
    path: ':postId',
    component: PostPageComponent,
  },
  {
    path: 'posts/newPost',
    component: PostFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
