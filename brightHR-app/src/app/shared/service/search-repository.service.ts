import { Content } from './../../core/models/content';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SearchRepository {
  public constructor(private http: HttpClient) {}

  public fetchAll(): Observable<Content[]> {
    return this.http.get<Content[]>('https://www.mocky.io/v2/5ca11bc73700005600899225');
  }
}
