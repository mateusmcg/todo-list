import { Component } from '@angular/core';
import { Auth, User, IDetailedError } from '@ionic/cloud-angular';

import { NavController, AlertController, LoadingController, ViewController } from 'ionic-angular';

@Component({
    selector: 'cadastro',
    templateUrl: 'cadastro.html'
})
export class Cadastro {

    constructor(public navCtrl: NavController,
        public alertCtrl: AlertController,
        public auth: Auth,
        public user: User,
        public loadingCtrl: LoadingController,
        public viewCtrl: ViewController) {

    }

    signup(evt, name, email, password) {
        let loadingAlert = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Salvando...'
        });
        loadingAlert.present();
        let userInfo = { name: name, email: email, password: password };
        this.auth.signup(userInfo).then(() => {
            loadingAlert.dismiss();
            this.showSuccessAlert('Sucesso', 'Cadastro efetuado com sucesso!');
            this.closeSignUp();
        }, (err: IDetailedError<string[]>) => {
            loadingAlert.dismiss();
            for (let e of err.details) {
                if (e === 'conflict_email') {
                    this.showSuccessAlert('Atenção !', 'Email já cadastrado!');
                } else if (e === 'conflict_username') {
                    this.showSuccessAlert('Atenção !', 'Usuário já cadastrado!');
                } else if(e === 'invalid_email'){
                    this.showSuccessAlert('Atenção !', 'Email inválido!');
                }else{
                    this.showSuccessAlert('Atenção !', 'Email e senha obrigatórios!');
                }
            }
        });
    }

    closeSignUp(){
        this.navCtrl.pop();
    }

    showSuccessAlert(title, msg) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    }

    closeModal(){
        this.viewCtrl.dismiss();
    }
}
