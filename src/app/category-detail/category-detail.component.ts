import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  inputs: ['category'],
  outputs: ['updateCategoryEvent', 'deleteCategoryEvent'],
})
export class CategoryDetailComponent implements OnInit {
  category: Category;
  editTitle = false;
  updateCategoryEvent = new EventEmitter();
  deleteCategoryEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEditTitle() {
    this.editTitle = true;
  }
  updateCategory() {
    this.editTitle = false;
    this.updateCategoryEvent.emit(this.category);
  }

  deleteCategory() {
    // this.editTitle = false;
    this.deleteCategoryEvent.emit(this.category);
  }
}
