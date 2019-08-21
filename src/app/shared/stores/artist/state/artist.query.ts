import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ArtistStore, ArtistState } from './artist.store';

@Injectable({ providedIn: 'root' })
export class ArtistQuery extends QueryEntity<ArtistState> {

  constructor(protected store: ArtistStore) {
    super(store);
  }

}
