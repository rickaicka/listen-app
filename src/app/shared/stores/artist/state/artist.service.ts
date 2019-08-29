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
    headerSettings['Authorization'] = 'Bearer BQCyhYkYuFgPdTxtleqoAW6u3a-PzZatyD1PKvssHdH-96p84gkjPri0Ln9sv7z2adLH9mXWf3Zq_2yoJ7yguxSYe8Wiw7MZE3rRKZiK7rOb8MygnCbBcIBU8RuRvhchky4suAV2YRln22btI1rJX1lh3JWze948Nzkvw-ayhzkUm1TM8EYwwKHKy1Q-Klrng45jzSvdMEkN6bPlflrpZxMvBZ31jozI4zzKNaxc4SVD9CiDBOzC65FnRZsja0R9cZtajBrqUCai6KE';
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
