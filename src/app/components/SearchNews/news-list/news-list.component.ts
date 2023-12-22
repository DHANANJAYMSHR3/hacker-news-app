import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';
import { NgFor,NgIf } from "@angular/common";
import { FormsModule }   from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule,CommonModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit {
  newestStories: any[] = [];
  newestStoriesDetail: any[] = []; 
  searchTerm = 0;
  id=0;
  start=0;
  end =200;
  searchedItem: any;

 constructor(private hackerNewsService: HackerNewsService,private cdr: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    this.loadNewestStories();
  }

  loadNewestStories(): void {
    
   
    this.hackerNewsService.getNewestStories()
      .subscribe(data => this.newestStories = data.slice(this.start,this.end));
      
  }
  loadNewestStoryDetail(): void {
    
    this.hackerNewsService.geNewsStoriesDetail(this.id)
      .subscribe(data => this.newestStoriesDetail = [data]);

     
      // console.log(this.newestStoriesDetail);
      // this.cdr.detectChanges();
  }

  search(): void {
    
    this.newestStories =this.newestStories.filter(item => item.id === +this.searchTerm );
    
  }

  onPageChange(start: number,end :number): void {
    this.start=start;
    this.end=end;
    this.loadNewestStories();
  }
  myMethod(event: Event,parameter: number) {
    event.preventDefault();
    this.id = parameter
    this.loadNewestStoryDetail()
    //console.log('Clicked with parameter:', parameter);
  }
}