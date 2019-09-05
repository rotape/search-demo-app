import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { SearchResponse, SearchParams } from '../models/searchModel';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.less']
})
export class SearchPageComponent implements OnInit {
  searchResult: [];
  searchWord: string;
  language = 'EN';
  languages: [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getLanguages().subscribe((res: []) =>  this.languages = res);
  }

  displaySearch() {
    this.searchService
      .search(new SearchParams(this.searchWord, this.language))
      .subscribe((resp: SearchResponse) => this.searchResult = resp.semanticallySimilarWords);
  }
}
