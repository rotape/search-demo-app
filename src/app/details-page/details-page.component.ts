import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.less']
})
export class DetailsPageComponent implements OnInit {
  word: string;
  details = {};

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.word = params.get('word');
    });
    this.searchService.search(this.word).subscribe((res) => {
      this.details = res;
    });
  }

}
