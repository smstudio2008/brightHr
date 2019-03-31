import { Component, OnInit, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { InitialAppState } from 'src/app/shared/redux/interface/initialState';
import { searchActionFetchByName, createActionApiFetchSuccess } from 'src/app/shared/redux/actions/creator';
import { SearchRepository } from 'src/app/shared/service/search-repository.service';
import { Content } from 'src/app/core/models/content';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public searchStr: string;
  constructor(private contentList: SearchRepository, private ngRedux: NgRedux<InitialAppState>) {}
  public results: any;

  ngOnInit() {}

  public getData() {
    this.contentList.fetchAll().subscribe((resp: Content[]) => {
      this.results = resp;
      this.ngRedux.dispatch(searchActionFetchByName(this.results, this.searchStr));
    });
  }
}
