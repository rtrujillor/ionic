import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../../..';

import { AppComponent } from './app.component';

import { FirstPage } from '../pages/tab-one/first-page/first-page';
import { SecondPage } from '../pages/tab-one/second-page/second-page';
import { ThirdPage } from '../pages/tab-one/third-page/third-page';
import { FourthPage } from '../pages/tab-two/fourth-page/fourth-page';
import { FifthPage } from '../pages/tab-two/fifth-page/fifth-page';
import { SixthPage } from '../pages/tab-two/sixth-page/sixth-page';

@NgModule({
  declarations: [
    AppComponent,
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SixthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent, { swipeBackEnabled: true, preloadModules: true }, {
      links: [
        { component: FirstPage, name: 'FirstPage', segment: 'first-page'},
        { component: SecondPage, name: 'SecondPage', segment: 'pageTwo/userId/:userId/name/:name'},
        { component: ThirdPage, name: 'ThirdPage', segment: 'pageThree/paramOne/:paramOne/paramTwo/:paramTwo'},
        { component: FourthPage, name: 'FourthPage', segment: 'fourth-page'},
        { component: FifthPage, name: 'FifthPage', segment: 'pageFive/userId/:userId/name/:name'},
        { component: SixthPage, name: 'SixthPage', segment: 'pageSix/paramOne/:paramOne/paramTwo/:paramTwo'},
      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SixthPage
  ]
})
export class AppModule {}
