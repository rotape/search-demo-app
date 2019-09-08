import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchParams } from '../models/searchModel';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = 'https://api.gavagai.se/v3';
  callParams = {
    params : {
      apiKey: '3acdef1f01cbceb88b132158abd466da',
      additionalFields: ['SEMANTICALLY_SIMILAR_WORDS']
    }
  };

  constructor(private http: HttpClient) { }

  search(params: SearchParams) {
    return this.http.get(this.baseUrl + `/lexicon/${params.lang}/${params.word}`, this.callParams);
  }

  getLanguages() {
    return this.http.get(this.baseUrl + '/languages', this.callParams);
  }
}
