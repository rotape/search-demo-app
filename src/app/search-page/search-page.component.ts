import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { SearchResponse, SearchParams } from '../models/searchModel';
import { OverlayService } from '../services/overlay.service';

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

  constructor(private searchService: SearchService, private overlayService: OverlayService) { }

  ngOnInit() {
    this.overlayService.display(true);
    this.searchService.getLanguages().subscribe((res: []) => this.languages = res,
        () => console.log('ERROR'),
        () => this.overlayService.display(false));
  }

  displaySearch() {
    this.overlayService.display(true);
    this.searchService
      .search(new SearchParams(this.searchWord, this.language))
      .subscribe(
        (resp: SearchResponse) => this.searchResult = resp.semanticallySimilarWords,
        () => console.log('ERROR'),
        () => this.overlayService.display(false));
  }
}
