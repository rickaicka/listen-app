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
  public slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  public slideConfig = {};

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
    this.slideConfig = {
      "slidesToShow": 5,
      "slidesToScroll": 1,
      "prevArrow": '<button class="btn-prev btn btn-pill btn-air btn-default btn-icon-only"><i class="la la-angle-left"></i></button>',
      "nextArrow": '<button class="btn-next btn btn-pill btn-air btn-default btn-icon-only"><i class="la la-angle-right"></i></button>',
      "dots":false,
      "speed": 1000,
      "infinite": false,
      // Breakpoints
      responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4
            }
        },

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },

        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
    };
  }

  ngOnDestroy() {

  }



  ngAfterViewChecked(){
    //this.listAll();
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
    headerSettings['Authorization'] = 'Bearer BQCyhYkYuFgPdTxtleqoAW6u3a-PzZatyD1PKvssHdH-96p84gkjPri0Ln9sv7z2adLH9mXWf3Zq_2yoJ7yguxSYe8Wiw7MZE3rRKZiK7rOb8MygnCbBcIBU8RuRvhchky4suAV2YRln22btI1rJX1lh3JWze948Nzkvw-ayhzkUm1TM8EYwwKHKy1Q-Klrng45jzSvdMEkN6bPlflrpZxMvBZ31jozI4zzKNaxc4SVD9CiDBOzC65FnRZsja0R9cZtajBrqUCai6KE';
    const newHeader = new HttpHeaders(headerSettings);
    // this.artistService.get<Artist>(id, {headers: newHeader}).subscribe((data: Artist) => {
    //   console.log(this.artistQuery.getAll());
    // });
  }

}
