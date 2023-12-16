import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/SearchNews/news-list/news-list.component';

export const routes: Routes = [
    { path: 'news', pathMatch: 'full', component: NewsListComponent},
    
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
