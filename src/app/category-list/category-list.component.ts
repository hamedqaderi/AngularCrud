import { Component, OnInit, EventEmitter } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  inputs: ['categories'],
  outputs: ['SelectCategory']
})
export class CategoryListComponent implements OnInit {
  SelectCategory = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectCategory(category: Category) {
    this.SelectCategory.emit(category);
  }
}
