import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './routes/core-routing.module';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule, HomePageModule],
  exports: [RouterModule],
  providers: []
})
export class HomeModule {}
