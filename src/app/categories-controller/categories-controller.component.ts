import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories-controller',
  templateUrl: './categories-controller.component.html',
  styleUrls: ['./categories-controller.component.css'],
  providers: [CategoryService]
})
export class CategoriesControllerComponent implements OnInit {
  categories: Array<Category>;
  category: Category;
  posts: Array<Post>;
  isActive: boolean = false;

  createForm:boolean = false;
  
  constructor(private _categoryService: CategoryService, private _postService: PostService) { }

  ngOnInit() {
    this._categoryService.getCategories()
        .subscribe((resData:Category[]) => this.categories = resData);
    this._postService.getPosts().subscribe((resData:Post[]) => this.posts = resData)
  }

  onSelect(category: any) {
    this.createForm = false;
    this.category = category;
  }

  showCreateForm() {
    this.createForm = true;
  }

  onSubmitAddCategory(category) {
    this._categoryService.addCategory(category)
      .subscribe(resNewCategory => this.categories.push(resNewCategory));

    this.category = category;      
    this.createForm = false;
  }

  onUpdateCategoryEvent(category: any) {
    this._categoryService.updateCategory(category)
      .subscribe(resUpdatedCategory => {
        category = resUpdatedCategory;
        this.category = null;
      });
  }

  private categoryHasAnyPost(category: Category) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].category_id == category._id) {
        return true;
      }
    }
    
    return false;
  }

  onDeleteCategoryEvent(category: any) {

    if(this.categoryHasAnyPost(category)) {
      this.isActive = true;
      return;
    }

    let categoryArray = this.categories;
    this._categoryService.deleteCategory(category).subscribe(
      resDeletedCategory => {
        for (let i = 0; i < categoryArray.length; i++) {
          if (categoryArray[i]._id === category._id) {
            categoryArray.splice(i, 1);
          }
        }
      }
    );

    this.category = null;
  }

  closeModal() {
    this.isActive = false;
  }
}
