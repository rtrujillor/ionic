import { Component } from '@angular/core';
import { NavController, } from '../../../../../../..';

import { SecondPage } from '../second-page/second-page';

@Component({
  templateUrl: 'first-page.html'
})
export class FirstPage {
  constructor(public nav: NavController) {
  }

  clickMe() {
    this.nav.push(SecondPage, { userId: '123', name: 'Hans Gruber'});
  }
}
