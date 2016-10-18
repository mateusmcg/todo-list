import { Component } from '@angular/core';
import { Auth, User } from '@ionic/cloud-angular';

import { NavController, MenuController, AlertController } from 'ionic-angular';

import { Cadastro } from '../cadastro/cadastro';
import { MyApp } from '../../app/app.component';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class Login {

    constructor(public navCtrl: NavController,
        public auth: Auth,
        public user: User,
        public menu: MenuController,
        public alertCtrl: AlertController) {
        this.menu.swipeEnable(false);
    }

    signup(evt) {
        this.navCtrl.push(Cadastro)
    }

    signin(evt, email, password) {
        var alert = this.showLoading('', 'Entrando...');
        let userInfo = { email: email, password: password };
        this.auth.login('basic', userInfo).then((user) => {
            this.navCtrl.setRoot(MyApp);
            alert.dismiss();
        }, (err: any) => {
            alert.dismiss();
            this.showAlert('Erro !', 'Usuário ou senha inválidos!');
        });
    }

    showLoading(title, msg): any {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: msg
        });
        alert.present();
        return alert;
    }

    showAlert(title, msg) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    }
}
