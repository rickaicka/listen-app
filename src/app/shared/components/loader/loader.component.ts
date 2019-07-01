import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lst-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {

  @Input() showLoader;
  constructor() { }
  ngOnInit() {
  }

}
