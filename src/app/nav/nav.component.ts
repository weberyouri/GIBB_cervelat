import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('rotateIcon', [
      state('closed', style({})),
      state('open', style({transform: 'rotate(-90deg)'})),
      transition('open <=> closed', [animate('200ms')])
    ]),
  ]
})
export class NavComponent implements OnInit {

  mobile = false;
  menu = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth >= 576) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.onResize();
  }

  toggleMenu() {
    this.menu = !this.menu;
  }
}
