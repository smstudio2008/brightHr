import { Content } from './../../core/models/content';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SearchRepository {
  public constructor(private http: HttpClient) {}

  //  private defaultNumberOfResults = 6;

  public fetchAll(): Observable<Content> {
    return this.http.get<Content>('http://www.mocky.io/v2/5ca0b24e370000640089916f');
  }
}
