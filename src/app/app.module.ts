import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoriesControllerComponent } from './categories-controller/categories-controller.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostControllerComponent } from './post-controller/post-controller.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryListComponent,
    PostListComponent,
    PostDetailComponent,
    CategoryDetailComponent,
    CategoriesControllerComponent,
    PostControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
