import { Component, OnInit } from '@angular/core';
import { SearchRepository } from 'src/app/shared/service/search-repository.service';
import { NgRedux } from '@angular-redux/store';
import { InitialAppState } from 'src/app/shared/redux/interface/initialState';

import { searchActionFetchByFilter } from 'src/app/shared/redux/actions/creator';
import { Content } from 'src/app/core/models/content';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit {
  selectedLevel;
  public results: Array<Content>;

  constructor(private contentList: SearchRepository, private ngRedux: NgRedux<InitialAppState>) {}

  selections = ['Name - Alphabetically', 'Date: Earliest to Latest', 'Date: Latest to Earliest', 'Size: Low to high', 'Size: High to Low'];
  ngOnInit() {}

  selected() {
    this.contentList.fetchAll().subscribe((resp: Content[]) => {
      this.results = resp;
      this.ngRedux.dispatch(searchActionFetchByFilter(this.results));
    });
  }
}
