import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchService } from './search.service';
import {  HttpClientModule } from '@angular/common/http';
import { DetailsPageComponent } from './details-page/details-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';

const appRoutes: Routes = [
  {path: '', component: SearchPageComponent },

  {path: 'detailsPage', component: DetailsPageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DetailsPageComponent,
    SearchPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
