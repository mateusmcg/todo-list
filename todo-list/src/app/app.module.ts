import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { Tarefas } from '../pages/tarefas/tarefas';
import { Projetos } from '../pages/projetos/projetos';
import { Login } from '../pages/login/login';
import { Cadastro } from '../pages/cadastro/cadastro';

import { ProjetoService } from './services/projeto.service';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '89d24376'
  }
};

@NgModule({
  declarations: [
    MyApp,
    Tarefas,
    Projetos,
    Login,
    Cadastro
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Tarefas,
    Projetos,
    Login,
    Cadastro
  ],
  providers: [
    ProjetoService
  ]
})
export class AppModule {}
