import { Content } from './../../../../core/models/content';
import { SearchRepository } from 'src/app/shared/service/search-repository.service';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { InitialAppState } from 'src/app/shared/redux/interface/initialState';
import { createActionApiFetchSuccess } from 'src/app/shared/redux/actions/creator';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

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
    this.test();
  }

  public name() {
    this.contentList.fetchAll().subscribe((resp: Content[]) => {
      this.results = resp;
      this.ngRedux.dispatch(createActionApiFetchSuccess(this.results));
    });
  }

  public test() {
    // from(this.contentList.fetchAll())
    // .flatMap((resps: Content[]))
    //   //.pipe(filter((resp: Content) => resp.name === 'Employee Handbook'))
    //   .subscribe(val => console.log(val 'yooo'));
    // // this.contentList
    // //   .fetchAll()
    // //   // .pipe(filter((resp: Content) => resp.name === 'Employee Handbook'))
    // const source = from(this.contentList.fetchAll());
    // console.log(source.)
    // // const example = source.pipe(filter(person => person.age >= 30));
    // // const subscribe = example.subscribe(val => console.log(`Over 30: ${val.name}`));
  }
}
