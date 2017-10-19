import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  skip(){
    this.navCtrl.push(HomePage);
  }

  slideChange(){
    if(this.slides.isEnd()) {
      this.skipMsg = "Lets get started!";
    }

  }

}
