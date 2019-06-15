import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the AbilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ability',
  templateUrl: 'ability.html',
})
export class AbilityPage {

  public loadProgress : number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ngOnInit() {
    // Test interval to show the progress bar
    setInterval(() => {
      if (this.loadProgress < 100)
        this.loadProgress += 1;
      else
        clearInterval(this.loadProgress);
    }, 50);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AbilityPage');
  }

}
