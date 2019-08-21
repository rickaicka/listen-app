import { Injectable } from '@angular/core';
import { Artist } from './artist.model';
import { EntityState, EntityStore, StoreConfig, getInitialEntitiesState } from '@datorama/akita';

export interface ArtistState extends EntityState<Artist> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'artist' })
export class ArtistStore extends EntityStore<ArtistState, Artist> {

  constructor() {
    super();
  }

}

