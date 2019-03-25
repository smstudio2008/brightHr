import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './app/modules/components/home-page/home-page.component';
import { ContentListComponent } from './modules/components/content-list/content-list.component';
import { ContentListItemComponent } from './modules/components/content-list-item/content-list-item.component';
import { SearchBoxComponent } from './modules/components/search-box/search-box.component';
import { ContentFilterComponent } from './modules/components/content-filter/content-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContentListComponent,
    ContentListItemComponent,
    SearchBoxComponent,
    ContentFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
