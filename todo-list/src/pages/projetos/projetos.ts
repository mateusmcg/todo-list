import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavController, ModalController, LoadingController } from 'ionic-angular';

import { ProjetoService } from '../../app/services/projeto.service';
import { Projeto } from '../../app/model/projeto';
import { AddEditProjeto } from 'addEdit';

@Component({
  selector: 'page-page1',
  templateUrl: 'projetos.html'
})
export class Projetos implements OnInit, OnDestroy {

  projetos: Array<Projeto>;

  constructor(public navCtrl: NavController,
    public projetoService: ProjetoService,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController) {

  }

  ngOnInit() {
    let loadingAlert = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Carregando projetos...'
        });
        loadingAlert.present();
    this.projetoService.getAll().subscribe((result) => {
      this.projetos = result.map((item) => new Projeto(item._id, item.nome, item.descricao, item.dataCriacao, item.tarefas));
      console.log(result);
      console.log(this.projetos);
      loadingAlert.dismiss();
    }, (error) => {
      console.log(error);
      alert('Estamos com problemas :(\n Tente novamente mais tarde.');
      loadingAlert.dismiss();
    })
  }

  detalharProjeto(evt, projeto){

  }

  removerProjeto(evt, id){

  }

  editarProjeto(evt, id){
    let modal = this.modalCtrl.create(AddEditProjeto, {
      acao: 'edit',
      id: id
    });
    modal.present();
  }

  addProjeto(){
    let modal = this.modalCtrl.create(AddEditProjeto, {
      acao: 'add'
    });
    modal.present();
  }

  ngOnDestroy() {

  }
}
