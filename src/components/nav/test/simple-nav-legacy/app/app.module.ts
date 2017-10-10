import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../../..';

import { AppComponent } from './app.component';

import { FirstPage } from '../pages/first-page/first-page';
import { SecondPage } from '../pages/second-page/second-page';
import { ThirdPage } from '../pages/third-page/third-page';

@NgModule({
  declarations: [
    AppComponent,
    FirstPage,
    SecondPage,
    ThirdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent, { swipeBackEnabled: true, preloadModules: true }, {
      links: [
        { component: FirstPage, name: 'FirstPage', segment: 'first-page'},
        { component: SecondPage, name: 'SecondPage', segment: 'user/:userId/name/:name'},
        { component: ThirdPage, name: 'ThirdPage', segment: 'paramOne/:paramOne/paramTwo/:paramTwo'}
      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FirstPage,
    SecondPage,
    ThirdPage
  ]
})
export class AppModule {}
