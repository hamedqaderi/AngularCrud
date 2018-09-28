import { Component, OnInit, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  inputs: ['post', 'categories', 'postCategory'],
  outputs: ['onCategoryChangeEvent', 'updatePostEvent', 'deletePostEvent']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  private showUpdateForm = false;

  private onCategoryChangeEvent = new EventEmitter();
  private updatePostEvent = new EventEmitter();
  private deletePostEvent = new EventEmitter();
  private show = true;
  
  constructor() { }

  ngOnInit() {
  }

  onClickUpdate() {
    this.showUpdateForm = true;
  }

  onChange(category_id: any) {
    this.onCategoryChangeEvent.emit(category_id);
  }

  updatePost() {
    this.updatePostEvent.emit(this.post);
  }

  deletePost() {
    this.show = false;
    this.deletePostEvent.emit(this.post);
  }
}
