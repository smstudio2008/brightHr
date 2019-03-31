import { SearchRepository } from 'src/app/shared/service/search-repository.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  constructor(private contentList: SearchRepository) {}

  ngOnInit() {
    this.name();
  }

  public name() {
    this.contentList.fetchAll().subscribe(x => {
      console.log(x);
    });
  }
}
