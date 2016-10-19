import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ProjetoService } from '../../app/services/projeto.service';
import { Projeto } from '../../app/model/projeto';

@Component({
  selector: 'page-page1',
  templateUrl: 'projetos.html'
})
export class Projetos implements OnInit, OnDestroy {

  projetos: Array<Projeto>;

  constructor(public navCtrl: NavController,
    public projetoService: ProjetoService) {

  }

  ngOnInit() {
    this.projetoService.getAll().subscribe((result) => {
      this.projetos = result.map((item) => new Projeto(item.id, item.name, item.website, new Date()));
      console.log(result);
    }, (error) => {
      console.log(error);
    })
  }

  ngOnDestroy() {

  }
}
