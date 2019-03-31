import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ContentListModule } from './content-list/content-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import { SearchBoxComponent } from './search-box/search-box.component';
@NgModule({
  declarations: [HomePageComponent, FilterBoxComponent, SearchBoxComponent],
  imports: [CommonModule, ContentListModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
