import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  search(params) {
    return this.http.get(this.baseUrl + `/lexicon/EN/${params.word}`, this.callParams);
  }
}
