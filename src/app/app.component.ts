import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from './search.service';
import { SearchResponse } from './models/searchModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'lexicon';
  searchResult: [];
  searchWord: string;
  params = { language: '', word: '' };
  model = { language: '', searchWord: this.searchWord };

  constructor( private searchService: SearchService) { }

  displaySearch() {
    console.log('displaying seearch');
    this.params.language = this.model.language;
    this.params.word = this.model.searchWord;
    this.searchService.search(this.params).subscribe((resp: SearchResponse) => {
      this.searchResult = resp.semanticallySimilarWords;
    });
  }
}
