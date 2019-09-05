import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { SearchResponse } from '../models/searchModel';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.less']
})
export class SearchPageComponent implements OnInit {
  title = 'lexicon';
  searchResult: [];
  searchWord: string;
  params = { language: '', word: this.searchWord };
  model = { language: '', searchWord: this.searchWord };

  constructor( private searchService: SearchService) { }

  ngOnInit() {}

  displaySearch() {
    this.params.language = this.model.language;
    this.params.word = this.model.searchWord;
    this.searchService.search(this.params).subscribe((resp: SearchResponse) => {
      this.searchResult = resp.semanticallySimilarWords;
    console.log('displaying seearch', this.searchResult);
    });
  }
}
