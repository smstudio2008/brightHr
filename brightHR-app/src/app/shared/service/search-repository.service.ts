import { Content } from './../../core/models/content';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SearchRepository {
  public constructor(private http: HttpClient) {}

  //  private defaultNumberOfResults = 6;

  public fetchAll(): Observable<Content> {
    return this.http.get<Content>('../../api/mock/content-reponse.json');
  }
}
