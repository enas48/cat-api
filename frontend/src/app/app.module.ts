import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { MostSearchedComponent } from './most-searched/most-searched.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchComponent,
    CatListComponent,
    CatDetailsComponent,
    MostSearchedComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
