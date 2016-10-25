import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from '@ionic/cloud-angular';
import { Projeto } from '../model/projeto';

@Injectable()
export class ProjetoService {

    private projetosUrl = '';

    constructor(private http: Http,
        private user: User) {
        this.projetosUrl = 'http://app-todolist.herokuapp.com/api/projetos';
    }

    getAll() {
        return this.http.get(this.projetosUrl + '?email=' + this.user.details.email)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getOne(id: String) {
        return this.http.get(this.projetosUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    add(projeto: Projeto) {

    }

    edit(id: number, novoProjeto: Projeto) {

    }

    remove(id: number) {

    }
}