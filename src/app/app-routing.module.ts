import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { CategoriesControllerComponent } from './categories-controller/categories-controller.component';
import { PostControllerComponent } from './post-controller/post-controller.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesControllerComponent },
  { path: 'posts', component: PostControllerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
