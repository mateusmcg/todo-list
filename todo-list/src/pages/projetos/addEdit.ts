import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavParams, ViewController, LoadingController } from 'ionic-angular';

import { ProjetoService } from '../../app/services/projeto.service';
import { Projeto } from '../../app/model/projeto';

import { Subscription } from 'rxjs/Rx';

@Component({
    templateUrl: 'addEdit.html'
})
export class AddEditProjeto implements OnInit, OnDestroy {

    acao: String;
    projectId: String;
    projeto: Projeto;
    sub: Subscription;

    constructor(public params: NavParams,
        public viewCtrl: ViewController,
        public projetoService: ProjetoService,
        public loadingCtrl: LoadingController) {
        this.acao = params.get('acao');
        this.projectId = params.get('id');
        this.projeto = new Projeto('', '', '', new Date(), null);
    }

    ngOnInit() {
        if (this.projectId != null) {
            this.initEdit();
        } else {
            this.initAdd();
        }
    }

    ngOnDestroy() {
        if(this.sub)
            this.sub.unsubscribe();
    }

    closeModal() {
        this.viewCtrl.dismiss();
    }

    initEdit() {
        let loadingAlert = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Carregando projeto...'
        });
        loadingAlert.present();
        this.sub = this.projetoService.getOne(this.projectId).subscribe((result) => {
            console.log(result);
            this.projeto = new Projeto(result.id, result.nome, result.descricao, result.dataCriacao, result.tarefas);
            loadingAlert.dismiss();
        }, (error) => {
            console.log(error);
            alert('Estamos com problemas :(\n Tente novamente mais tarde.');
            loadingAlert.dismiss();
        })
    }

    initAdd() {

    }
}