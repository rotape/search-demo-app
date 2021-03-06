import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../services/search.service';
import {WordDetails, SearchParams} from '../models/searchModel';
import {OverlayService} from '../services/overlay.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.less']
})
export class DetailsPageComponent implements OnInit {
  details: any;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private overlayService: OverlayService) {
  }

  ngOnInit() {
    this.overlayService.display(true);
    this.route.paramMap.subscribe((params) => {
      this.searchService
        .getWordDetails(new SearchParams(params.get('word'), params.get('language')))
        .subscribe((resp: WordDetails) => {
            this.details = resp;
          },
          () => console.log('ERROR'),
          () => this.overlayService.display(false));
    });
  }

}
