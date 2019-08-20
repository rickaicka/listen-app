import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ArtistStore, ArtistState } from './artist.store';
import { Artist } from './artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistQuery extends QueryEntity<ArtistState, Artist> {

  constructor(protected store: ArtistStore) {
    super(store);
  }

}