import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {
  }

  menu(){
        this.navCtrl.push(MenuPage);
  }
}
