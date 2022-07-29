import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CatDetailsComponent} from './cat-details/cat-details.component';
import {MostSearchedComponent} from './most-searched/most-searched.component'

const routes: Routes = [

  {path:'', component:HomepageComponent},
  {path:'cat/:id', component:CatDetailsComponent},
  {path:'mostsearched',component:MostSearchedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
