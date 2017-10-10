import { Component } from '@angular/core';

import { LoginPage } from '../pages/login-page/login-page';

@Component({
  template: `<ion-nav [root]="root"></ion-nav>`
})
export class AppComponent {
  root = LoginPage;
}
