export interface Post {
  _id: string;
  tags: Array<string>;
  title: string;
  content: string;
  category: string;
  author: string;
  creationDate: Date;
  _v: string;
}
