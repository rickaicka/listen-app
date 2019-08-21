import { Injectable } from '@angular/core';
import { ArtistStore, ArtistState } from './artist.store';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { Artist, ArtistList } from './artist.model';
import { ID } from '@datorama/akita';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@NgEntityServiceConfig({
  resourceName: 'artists'
})
@Injectable({ providedIn: 'root' })
export class ArtistService {

  constructor(
    private store: ArtistStore,
    private http: HttpClient) {
  }

  addArtist(artist: Artist){
    this.store.add(artist);
  }

  addMultiple(artists: Artist[]){
    this.store.upsertMany(artists, {baseClass: Artist});
  }

  selectArtist(id: ID) {
    this.store.setActive(id);
  }

  getArtists() {
    const headerSettings: {[name: string]: string | string[]; } = {};
    headerSettings['Authorization'] = 'Bearer BQCWFJkve9WSbgifVaE0X7ZL4UxXChRBEuX4YwBkkG9WGMh-QkDgene-cKM_4Jnof1LAMTkQ7cLbLCwTjrA6ZOTf3q3dW4ZNrjkalwWtD8TzqRxKVF6Pemwts2y1GOFzVtom0NWYZ4iy6B0QE-C_Z3JKmSco0vKfDUoh3TPXN9xDlH0wQEGwaga8axz4OgCy32WDIiR9_Itl6o6QteEf0JOm1Uv1psM2gN1r5vxM1wIJ-3EaUWzQWLB6j-jw4A25NosPiagPsILBuzg';
    const newHeader = new HttpHeaders(headerSettings);
    let newParams = new HttpParams().set('ids', '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6');
    this.http.get<ArtistList>('https://api.spotify.com/v1/artists', {params: newParams, headers: newHeader}).subscribe((req: ArtistList) => {
      if (req && req.artists.length > 0) {
        req.artists.forEach((element: Artist) => {
          this.addArtist(element);
        });
      }
    });
  }
}
