import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';
import { HackerNewschildService } from '../hacker-newschild.service';
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
  ids: { id: number }[] =[];
  //ids: [] = [];
  titles: { [id: number]: { title: string; url: string } } = {};
  

 constructor(private hackerNewsService: HackerNewsService,private hackerNewschildService:HackerNewschildService,private cdr: ChangeDetectorRef) {}
  
 ngOnInit() {
  this.loadNewestStories();
  
}

  loadNewestStories(): void {
    this.hackerNewsService.getNewestStories().subscribe((id) => {
      this.ids= id.slice(this.start,this.end);
      this.fetchTitles();
      
    });
      
    
  }
 
  fetchTitles() {
    for (let id of this.ids) {
      this.hackerNewschildService.geNewsStoriesDetail(id.id).subscribe((data) => {
        this.titles[id.id] = { title: String(data.title), url: String(data.url) };
        
      });
    }
  }


  onKeyUp(event: any): void {
    const searchTerm = event.target.value.toLowerCase();
    for (let id of this.ids) {
       this.titles[id.id].title.toLowerCase().includes(searchTerm)
    }
    
  }
  onPageChange(start: number,end :number): void {
    this.start=start;
    this.end=end;
    this.loadNewestStories();
  }
}