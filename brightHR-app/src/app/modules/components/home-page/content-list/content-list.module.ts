import { ContentItemsComponent } from './content-items/content-items.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list.component';

@NgModule({
  declarations: [ContentItemsComponent, ContentListComponent],
  imports: [CommonModule],
  exports: [ContentListComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentListModule {}
