import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { ArtistStore } from './artist.store';
import { Artist } from './artist.model';

@Injectable({ providedIn: 'root' })
export class ArtistService {

  constructor(private artistStore: ArtistStore,
              private http: HttpClient) {
  }

  get() {
    this.http.get('https://akita.com').subscribe((entities) => this.artistStore.set(entities));
  }

  add(artist: Artist) {
    this.artistStore.add(artist);
  }

  update(id, artist: Partial<Artist>) {
    this.artistStore.update(id, artist);
  }

  remove(id: ID) {
    this.artistStore.remove(id);
  }
}
