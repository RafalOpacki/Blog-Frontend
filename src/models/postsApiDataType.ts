import { Pageable } from './pageable';
import { Post } from 'src/models/post';

export interface PostsApiDataType {
  posts: Array<Post>;
  pageable: Pageable;
  message: string;
}

export interface EditResponseApiDataType {
  post: Post;
  message: string;
}
