export interface Post {
  _id: String;
  tags: Array<String>;
  title: String;
  content: String;
  category: String;
  author: String;
  creationDate: Date;
  _v: String;
}
