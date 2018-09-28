import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _getUrl = '/api/categories';
  private _postUrl = '/api/category';
  private _putUrl = '/api/category/';
  private _deleteUrl = '/api/category/';

  constructor(private _http: HttpClient) { }

  getCategories() {
    return this._http.get(this._getUrl);
  }

  addCategory (category: Category): Observable<Category> {
    return this._http.post<Category>(this._postUrl, category, httpOptions);
  }


  updateCategory (category: Category): Observable<Category> {
    return this._http.put<Category>(this._putUrl + category._id, category, httpOptions);
  }

  deleteCategory(category: Category): Observable<{}> {
    return this._http.delete(this._deleteUrl + category._id, httpOptions);
  }
}
