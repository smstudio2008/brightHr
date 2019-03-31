import { Content } from './../../../../core/models/content';
import { SearchRepository } from 'src/app/shared/service/search-repository.service';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { InitialAppState } from 'src/app/shared/redux/interface/initialState';
import { createActionApiFetchSuccess } from 'src/app/shared/redux/actions/creator';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @select() searchResult;
  constructor(private contentList: SearchRepository, private ngRedux: NgRedux<InitialAppState>) {}
  public results: any;

  ngOnInit() {
    this.name();
  }

  public name() {
    this.contentList.fetchAll().subscribe((resp: Content) => {
      this.results = resp;
      this.ngRedux.dispatch(createActionApiFetchSuccess(this.results));
    });
  }
}
