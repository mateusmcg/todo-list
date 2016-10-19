import { Component } from '@angular/core';
import { Auth, User } from '@ionic/cloud-angular';

import { NavController, MenuController, ModalController, AlertController, LoadingController } from 'ionic-angular';

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
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public modalCtrl: ModalController) {
        this.menu.swipeEnable(false, 'main-menu');
    }

    signup(evt) {
        let signUpModal = this.modalCtrl.create(Cadastro);
        signUpModal.present();
    }

    signin(evt, email, password) {
        let loadingAlert = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Entrando...'
        });
        loadingAlert.present();
        let userInfo = { email: email, password: password };
        this.auth.login('basic', userInfo).then((user) => {
            this.menu.swipeEnable(true, 'main-menu');
            this.navCtrl.setRoot(MyApp);
            loadingAlert.dismiss();
        }, (err: any) => {
            loadingAlert.dismiss();
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
