import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';
import {NgFor,NgIf} from "@angular/common";
import { FormsModule }   from '@angular/forms';



@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule ],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit {
  newestStories: any[] = [];
  searchTerm = '';
  itemsPerPage =10
  currentPage = 1;

 constructor(private hackerNewsService: HackerNewsService) {}
  
  ngOnInit(): void {
    this.loadNewestStories();
  }

  loadNewestStories(): void {
    this.hackerNewsService.getNewestStories(this.currentPage,this.itemsPerPage, this.searchTerm)
      .subscribe(data => this.newestStories = data);
  }

  search(): void {
    this.loadNewestStories();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadNewestStories();
  }
}