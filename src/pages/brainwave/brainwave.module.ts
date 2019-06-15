import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrainwavePage } from './brainwave';

@NgModule({
  declarations: [
    BrainwavePage,
  ],
  imports: [
    IonicPageModule.forChild(BrainwavePage),
  ],
})
export class BrainwavePageModule {}
