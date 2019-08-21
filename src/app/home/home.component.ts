import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PersistNgFormPlugin } from '@datorama/akita';
import { AkitaNgFormsManager } from '@datorama/akita-ng-forms-manager';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { ArtistQuery } from '../shared/stores/artist/state/artist.query';
import { ArtistService } from '../shared/stores/artist/state/artist.service';
import { createArtist, Artist } from '../shared/stores/artist/state/artist.model';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ArtistStore } from '../shared/stores/artist/state/artist.store';

@Component({
  selector: 'lst-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewChecked {

  artistForm: FormGroup;
  persistForm: PersistNgFormPlugin;
  artists$;

  constructor(
    private builder: FormBuilder,
    private artistQuery: ArtistQuery,
    private artistStore: ArtistStore,
    private artistService: ArtistService) { }

  ngOnInit() {
    this.artistForm = this.builder.group({
      id: Math.floor(Math.random() * 20),
      name: this.builder.control(''),
      genres: this.builder.control(''),
      href: this.builder.control(''),
      images: this.builder.control(''),
      popularity: this.builder.control(0),
      type: this.builder.control(''),
      uri: this.builder.control('')
    });
  }

  ngOnDestroy() {
  }

  ngAfterViewChecked(){
    this.listAll();
  }

  add(){
    this.artistService.addArtist(this.artistForm.value);
    this.artists$ = this.artistQuery.getAll();
  }

  listAll() {
    this.artistService.getArtists();
    this.artists$ = this.artistQuery.getAll();
  }

  getDetails(id: string) {
    const headerSettings: {[name: string]: string | string[]; } = {};
    headerSettings['Authorization'] = 'Bearer BQDfpml3eLXcjUb4LjKSaoi8vnLDknwLHrtxXp5-Sfp7kRE8OvkyiSV4O3FNTLV0DYihMtAmKUNUp8eDEeZmpLwdT6Ht7Dm8oowwPd2-N6UmP9WK6NDModDDzUJxieH4JbcOdcqLE95IfDW-xKQF5PP0MRzpP2PmLNGEFkhxnX7pnaZkPMkcxkayYZKhrUc3W062bELzWithVKWwxSV9CsAzJ-aHIcSCIUJa0crbsE8wDFW71nOHkOPw24DrsMYUlPbo5THRHfM4-eM';
    const newHeader = new HttpHeaders(headerSettings);
    // this.artistService.get<Artist>(id, {headers: newHeader}).subscribe((data: Artist) => {
    //   console.log(this.artistQuery.getAll());
    // });
  }

}
