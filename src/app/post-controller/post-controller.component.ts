import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Category } from '../category';
import { PostService } from '../post.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'post-controller',
  templateUrl: './post-controller.component.html',
  styleUrls: ['./post-controller.component.css'],
  providers: [PostService, CategoryService]
})
export class PostControllerComponent implements OnInit {
  posts: Array<Post>;
  categories: Array<Category>;
  post: Post;

  public selectedPostCategory;
  public createForm:boolean = false;
  
  constructor(private _postService: PostService, private _categoryService: CategoryService) {}

  ngOnInit() {
    this._postService.getPosts().subscribe((resData: Post[]) => this.posts = resData);
    this._categoryService.getCategories().subscribe((resData: Category[]) => this.categories = resData);
  }

  onSelect(post: any) {
    console.log(post);
    this.createForm = false;
    this.post = post;
    this.selectedPostCategory = this.findCategoryById(this.post.category_id);
  }

  findCategoryById(category_id) {
    return this.categories.filter((category) => {
      return category._id == category_id
    });
  }

  onChangePostCategory(category_id: string) {
    if (category_id) this.selectedPostCategory = this.findCategoryById(category_id);
  }

  showCreateForm() {
    this.createForm = true;
  }

  onUpdatePostEvent(post: any) {
    this._postService.updatePost(post)
      .subscribe(resUpdatedPost => {
        post = resUpdatedPost;
        this.post = null;
      });
  }

  onDeletePostEvent(post: any) {
    let postArray = this.posts;
    this._postService.deletePost(post).subscribe(
      resDeletedPost => {
        for (let i = 0; i < postArray.length; i++) {
          if(postArray[i]._id === post._id) {
            postArray.splice(i, 1);
          }
        }
      }
    );

    this.post = null;
  }

  onSubmitAddPost(post: any) {
    this._postService.addPost(post).subscribe(resPost => {
      this.posts.push(resPost);
      this.selectedPostCategory = this.findCategoryById(resPost.category_id);
    });
    this.post = post;
    this.createForm = false;
  }
}
