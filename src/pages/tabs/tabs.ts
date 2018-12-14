import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { GbPage } from '../gb/gb';
import { UsersList } from '../users/list/list';
import { EditPage } from '../edit/edit';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = GbPage;
  tab5Root=  UsersList;
  tab6Root=  EditPage;

  constructor() {

  }
}
