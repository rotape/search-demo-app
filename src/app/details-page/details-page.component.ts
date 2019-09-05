import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
import { WordDetails, SearchParams } from '../models/searchModel';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.less']
})
export class DetailsPageComponent implements OnInit {
  details: any;

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.searchService
        .search(new SearchParams(params.get('word')))
        .subscribe((resp: WordDetails) => this.details = resp.wordInformation);
    });
  }

}
