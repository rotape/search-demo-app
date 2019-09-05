import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { SearchResponse, SearchParams } from '../models/searchModel';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.less']
})
export class SearchPageComponent implements OnInit {
  title = 'lexicon';
  searchResult: [];
  searchWord: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() { }

  displaySearch() {
    this.searchService
      .search(new SearchParams(this.searchWord))
      .subscribe((resp: SearchResponse) => this.searchResult = resp.semanticallySimilarWords);
  }
}
