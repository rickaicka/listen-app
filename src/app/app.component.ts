import { Component, AfterContentInit, Renderer2, AfterViewChecked, ElementRef } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from './shared/services/loader.service';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  AfterContentInit {
  title = 'listen-app';
  isLoading = true;
  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private renderer: Renderer2,
    private eRef: ElementRef
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.isLoading = this.loaderService.show();
    }
    if (event instanceof NavigationEnd) {
      this.isLoading = this.loaderService.hide();
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.isLoading = this.loaderService.hide();
    }
    if (event instanceof NavigationError) {
      this.isLoading = this.loaderService.hide();
    }
  }

  ngAfterContentInit(): void {

    const content = this.eRef.nativeElement.querySelector('#wrapper');
    const scroll$ = fromEvent(content, 'scroll').pipe(map(() => content));

    scroll$.subscribe(element => {
      const header = this.eRef.nativeElement.querySelector('#header');
      if (element.scrollTop > 80) {
        this.renderer.addClass(header, 'scrolled');
      } else {
        this.renderer.removeClass(header, 'scrolled');
      }
    });
  }
}
