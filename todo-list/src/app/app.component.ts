import { Component, ViewChild, NgZone } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Tarefas } from '../pages/tarefas/tarefas';
import { Projetos } from '../pages/projetos/projetos';
import { Login } from '../pages/login/login';

import { Auth, User } from '@ionic/cloud-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Login;
  userName: String = '';

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public auth: Auth,
    public user: User,
    public zone: NgZone) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Tarefas', component: Tarefas },
      { title: 'Projetos', component: Projetos }
    ];

    // ToDo: Arrumar forma como menu é carregado após o login (Evento?).
    if (this.auth.isAuthenticated()) {
      var $this = this;
      setTimeout(function(){
        $this.rootPage = Tarefas;
        $this.userName = $this.user.details.name;
      }, 500);
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.auth.logout();
    this.nav.setRoot(Login);
  }
}
