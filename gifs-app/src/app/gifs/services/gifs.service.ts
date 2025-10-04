import { HttpClient } from '@angular/common/http';
import {inject, Injectable, signal} from '@angular/core';
import { environment } from '@environments/environment';
import { IGiphyResponse } from '@gifs/interfaces/giphy.interface';
import {IGif} from '@gifs/interfaces/gif.interface';
import { GifsMapper } from '@gifs/mappers/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);

  trendingsGifs = signal<IGif[]>([]);
  searchGifs = signal<IGif[]>([]);
  searchQuery = signal<string>('');
  
  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    return this.http.get<IGiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 60,
        offset: 0,
        rating: 'g',
        lang: 'en',
        bundle: 'low_bandwidth'
      }
    }).subscribe(resp => {
      console.log( resp.data[0].images.original.url);
      const gifs = GifsMapper.mapGiphyItemsToGifsArray(resp.data);
      console.log(gifs);
      this.trendingsGifs.set(gifs);
    });
  }

  searchGifsByQuery(query: string) {
    if (!query.trim()) {
      this.searchGifs.set([]);
      return;
    }

    this.searchQuery.set(query);
    
    return this.http.get<IGiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        q: query,
        limit: 60,
        offset: 0,
        rating: 'g',
        lang: 'en',
        bundle: 'low_bandwidth'
      }
    }).subscribe(resp => {
      const gifs = GifsMapper.mapGiphyItemsToGifsArray(resp.data);
      console.log('Search results:', gifs);
      this.searchGifs.set(gifs);
    });
  }

}
