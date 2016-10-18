import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { Tarefas } from '../pages/tarefas/tarefas';
import { Projetos } from '../pages/projetos/projetos';
import { Login } from '../pages/login/login';
import { Cadastro } from '../pages/cadastro/cadastro';

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
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Tarefas,
    Projetos,
    Login,
    Cadastro
  ],
  providers: []
})
export class AppModule {}
