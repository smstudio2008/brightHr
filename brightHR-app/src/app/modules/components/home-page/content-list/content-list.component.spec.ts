import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContentListComponent } from './content-list.component';
import { SearchRepository } from 'src/app/shared/service/search-repository.service';
import { NgRedux } from '@angular-redux/store';

describe('ContentListComponent', () => {
  let component: ContentListComponent;
  let fixture: ComponentFixture<ContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [SearchRepository, HttpClient, HttpHandler, NgRedux]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
