export class SearchParams {
    lang: string;
    word: string;

    constructor(word: string) {
        this.word = word;
        this.lang = 'EN';
    }
}
export interface SearchResponse {
    semanticallySimilarWords: [];
}

export interface WordDetails {
    wordInformation: {
        absoluteRank: number,
        additionalInformation: { link: string },
        frequency: number,
        relativeRank: number,
        vocabularySize: number,
        word: string
    };
}
