import { Component } from '@angular/core';
import { NavController, NavParams } from '../../../../../../..';

import { FifthPage } from '../fifth-page/fifth-page';

@Component({
  templateUrl: 'fourth-page.html'
})
export class FourthPage {

  constructor(public nav: NavController, public params: NavParams) {
  }

  goToNextPage() {
    this.nav.push(FifthPage, { userId: '456', name: 'Stanley Hudson'});
  }
}
