import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Album } from './album.model';

export interface AlbumsState extends EntityState<Album> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'albums' })
export class AlbumsStore extends EntityStore<AlbumsState, Album> {

  constructor() {
    super();
  }

}

