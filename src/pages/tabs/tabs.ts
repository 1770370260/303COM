import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { AbilityPage } from '../ability/ability';
import { BrainwavePage } from '../brainwave/brainwave';
import { StatusPage } from '../status/status';
import { HomePage } from '../home/home';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'royal' : 'primary'">
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
    </ion-content>
`
})

export class TabIconTextContentPage {
  
   isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}




@Component({
  template: `
    <ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'primary'">
      <ion-tab tabIcon="water" tabTitle="Home" [root]="tab1Root"></ion-tab>
      <ion-tab tabIcon="leaf" tabTitle="Status" [root]="tab2Root"></ion-tab>
      <ion-tab tabIcon="flame" tabTitle="Ability" [root]="tab3Root"></ion-tab>
      <ion-tab tabIcon="magnet" tabTitle="Brainwave" [root]="tab4Root"></ion-tab>
    </ion-tabs>
`})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StatusPage;
  tab3Root = AbilityPage;
  tab4Root = BrainwavePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
