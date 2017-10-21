import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HomePage;
  tab3Root = ProfilePage;

  constructor() {

  }
}