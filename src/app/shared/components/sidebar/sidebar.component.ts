import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'lst-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  isToggled = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.renderer[!this.isToggled ? 'addClass' : 'removeClass'](document.body, 'iconic-sidebar');
    (!this.isToggled ? this.isToggled = true : this.isToggled = false);
  }
  hideSidebar(){
    this.renderer.removeClass(document.body, 'open-sidebar');
    this.renderer.removeClass(this.renderer.selectRootElement('.sidebar-backdrop'), 'show');
  }
}
