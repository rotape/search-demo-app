import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchParams } from '../models/searchModel';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = 'https://api.gavagai.se/v3';
  apiKey = '8c79736f393ab6eff4a864fcfa23344c';
  searchCallParams = {
    params : {
      apiKey: this.apiKey,
      additionalFields: ['SEMANTICALLY_SIMILAR_WORDS']
    }
  };

  getWordDetailsParams = {
    params: {
      apiKey: this.apiKey,
    }
  };

  constructor(private http: HttpClient) { }

  search(params: SearchParams) {
    return this.http.get(this.baseUrl + `/lexicon/${params.lang}/${params.word}`, this.searchCallParams);
  }

  getWordDetails(params: SearchParams) {
    return this.http.get(this.baseUrl + `/lexicon/${params.lang}/${params.word}/info`, this.getWordDetailsParams);

  }

  getLanguages() {
    return this.http.get(this.baseUrl + '/languages', { params : {apiKey: this.apiKey}});
  }
}
