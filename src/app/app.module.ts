import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Camera } from '@ionic-native/camera';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AbilityPage } from '../pages/ability/ability';
import { BrainwavePage } from '../pages/brainwave/brainwave';
import { StatusPage } from '../pages/status/status';
import { TabsPage } from '../pages/tabs/tabs';

import { ProgressBarComponent } from '../pages/progress-bar/progress-bar'

@NgModule({
  declarations: [
    MyApp,
	HomePage,
	AbilityPage,
   BrainwavePage,  
  StatusPage,
  TabsPage,
  ProgressBarComponent  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	AbilityPage,
   BrainwavePage,  
  StatusPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
