import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AlbumsStore, AlbumsState } from './albums.store';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsQuery extends QueryEntity<AlbumsState, Album> {

  constructor(protected store: AlbumsStore) {
    super(store);
  }

}
