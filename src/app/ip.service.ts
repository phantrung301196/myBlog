import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PostEntity } from './postEntity';

@Injectable({ providedIn: 'root' })

export class IpService {
    private urlGetListPost = 'http://localhost:3000/posts';
    private urlGetPostDetail = 'http://localhost:3000/posts/';
    private urlSaveNewPost = 'http://localhost:3000/posts/';
    // private urlGetPostDetail = 'http://localhost:8080/BlogAPI/GetPostDetailAPI?id=';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getListPost(): Observable<PostEntity[]> {
        return this.http.get<PostEntity[]>(this.urlGetListPost).pipe();
    }

    getPostDetail(id: any): Observable<PostEntity> {
        console.log(this.urlGetPostDetail + id);
        return this.http.get<PostEntity>(this.urlGetPostDetail + id).pipe();
    }

    saveNewPost(post: PostEntity): Observable<String> {
        return this.http.post<String>(this.urlSaveNewPost, post, this.httpOptions).pipe();
    }
}