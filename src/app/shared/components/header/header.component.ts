import { Component, OnInit, Renderer2, HostListener, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArtistQuery } from '../../stores/artist/state/artist.query';
import { ArtistService } from '../../stores/artist/state/artist.service';

@Component({
  selector: 'lst-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @ViewChild('drop', {static: true}) elRefs: ElementRef;

  artists$;

  constructor(
    private renderer: Renderer2,
    private eRef: ElementRef,
    private artistQuery: ArtistQuery,
    private artistService: ArtistService) { }

  showLogin = false;

  ngOnInit() {
  }

  openSearch() {
    this.renderer.addClass(document.body, 'open-search');
    this.renderer.addClass(this.renderer.selectRootElement('.header-backdrop'), 'show');
    this.artists$ = this.artistQuery.getAll();
  }

  openSidebar($e){
    $e.stopPropagation();
    this.renderer.removeClass(document.body, 'open-search');
    this.renderer.addClass(document.body, 'open-sidebar');
    this.renderer.addClass(this.renderer.selectRootElement('.sidebar-backdrop'), 'show');
    this.renderer.removeClass(this.renderer.selectRootElement('.header-backdrop'), 'show');
  }

  openModalLogin() {
    (!this.showLogin ? this.showLogin = true : this.showLogin = false);
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      const el = this.eRef.nativeElement.querySelector('.dropdown');
      this.renderer.removeClass(document.body, 'open-search');
      this.renderer.removeClass(this.renderer.selectRootElement('.header-backdrop'), 'show');
      this.renderer.removeClass(el, 'show');
    }
  }
}
