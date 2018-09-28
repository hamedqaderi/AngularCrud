import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _getUrl = '/api/posts';
  private _putUrl = '/api/post/';
  private _deleteUrl = '/api/post/';
  private _postUrl = '/api/post';

  constructor(private _http: HttpClient) { }

  getPosts() {
    return this._http.get(this._getUrl);
  }

  updatePost(post: Post): Observable<Post> {
    return this._http.put<Post>(this._putUrl + post._id, post, httpOptions);
  }

  deletePost(post: Post): Observable<{}> {
    return this._http.delete(this._deleteUrl + post._id, httpOptions);
  }

  addPost(post: Post): Observable<Post> {
    return this._http.post<Post>(this._postUrl, post, httpOptions);
  }
}
