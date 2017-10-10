import { Component } from '@angular/core';
import { NavController, NavParams } from '../../../../../../..';

import { SixthPage } from '../sixth-page/sixth-page';

@Component({
  templateUrl: 'fifth-page.html'
})
export class FifthPage {

  userId: string;
  name: string;
  constructor(public nav: NavController, public params: NavParams) {
  }

  ionViewWillEnter() {
    this.userId = this.params.data.userId;
    this.name = this.params.data.name;
  }

  goToNextPage() {
    this.nav.push(SixthPage, { paramOne: 'taco taco taco', paramTwo: 'yum yum yum'});
  }
}
