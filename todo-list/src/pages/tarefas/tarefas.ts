import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';

import { ProjetoService } from '../../app/services/projeto.service';
import { Projeto } from '../../app/model/projeto';

@Component({
  templateUrl: 'tarefas.html'
})
export class Tarefas implements OnInit, OnDestroy{
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  projetos: Array<Projeto>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menu: MenuController,
              public projetoService: ProjetoService,
              public loadingCtrl: LoadingController) {
    
  }

  ngOnInit(){
    let loadingAlert = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Carregando tarefas...'
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

  ngOnDestroy(){

  }

  detalharTarefa(evt, id){

  }

  editarTarefa(evt, id){

  }

  removerTarefa(evt, id){

  }

  concluirTarefa(evt, id){
    
  }
}
