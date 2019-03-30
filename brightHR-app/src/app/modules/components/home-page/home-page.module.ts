import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { FilterBoxComponent } from '../filter-box/filter-box.component';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { ContentListModule } from './content-list/content-list.module';

@NgModule({
  declarations: [HomePageComponent, FilterBoxComponent, SearchBoxComponent],
  imports: [CommonModule, ContentListModule]
})
export class HomePageModule {}
