import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { AlbumsStore, AlbumsState } from './albums.store';
import { Album } from './album.model';
import { NgEntityService } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
export class AlbumsService extends NgEntityService<AlbumsState> {

  constructor(
    protected album: AlbumsStore,
    private http: HttpClient
    ) {
    super(album);
  }

  get() {
    this.http.get('https://akita.com').subscribe((entities) => this.album.set(entities));
  }

  add(album: Album) {
    this.album.add(album);
  }

  update(id, album: Partial<Album>) {
    this.album.update(id, album);
  }

  remove(id: ID) {
    this.album.remove(id);
  }
}
