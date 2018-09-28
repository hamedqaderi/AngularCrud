import { Component, OnInit, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  inputs: ['posts'],
  outputs: ['SelectPost']
})
export class PostListComponent implements OnInit {
  SelectPost = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    
  }

  onSelectPost(post: Post) {
    this.SelectPost.emit(post);
  }
}
