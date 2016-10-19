import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Projeto } from '../model/projeto';

@Injectable()
export class ProjetoService {

    private projetosUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: Http) { }

    getAll() {
        return this.http.get(this.projetosUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getOne(id: number) {

    }

    add(projeto: Projeto) {

    }

    edit(id: number, novoProjeto: Projeto) {

    }

    remove(id: number) {

    }
}