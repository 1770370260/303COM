import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BrainwavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brainwave',
  templateUrl: 'brainwave.html',
})
export class BrainwavePage {
   
   time; 
   timeInSeconds;
   remainingTime; 	
   displayTime;
   runTimer;
   hasStarted;
   hasFinished;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  /* Initialize and setup the time for question */
  ngOnInit() {
    this.initTimer();
  }
  
   initTimer() {
     // Pomodoro is usually for 25 minutes
    if (!this.timeInSeconds) { 
      this.timeInSeconds = 1500; 
    }
  
    this.time = this.timeInSeconds;
    this.runTimer = false;
    this.hasStarted = false;
    this.hasFinished = false;
    this.remainingTime = this.timeInSeconds;
    
    this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
   }
  
  startTimer() {
     this.runTimer = true;
    this.hasStarted = true;
    this.timerTick();
  }
  
  pauseTimer() {
    this.runTimer = false;
  }
  
  resumeTimer() {
    this.startTimer();
  }
  
  timerTick() {
    setTimeout(() => {
  
      if (!this.runTimer) { return; }
      this.remainingTime--;
      this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
      if (this.remainingTime > 0) {
        this.timerTick();
      }
      else {
        this.hasFinished = true;
      }
    }, 1000);
  }
  
  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BrainwavePage');
  }

}
