import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  home(){
    this.navCtrl.push(HomePage);
  }

  logout(){
    this.navCtrl.push(LoginPage);
  }

  others(){
    var msg = "OTHER PAGE";
    console.log(msg);
  }

}
