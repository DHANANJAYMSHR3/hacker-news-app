import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsListComponent } from './news-list/news-list.component';
import {NewsRoutingModule } from './news-routing.module';
import { HttpClientModule } from '@angular/common/http';









@NgModule({
  declarations: [
    NewsListComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,NewsRoutingModule,HttpClientModule
    
   ]

})
export class NewsModule { }
