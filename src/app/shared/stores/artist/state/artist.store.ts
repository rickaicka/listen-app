import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Artist } from './artist.model';

export interface ArtistState extends EntityState<Artist> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'artist' })
export class ArtistStore extends EntityStore<ArtistState, Artist> {

  constructor() {
    super();
  }

}

