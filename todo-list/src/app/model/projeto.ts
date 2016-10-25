import { Tarefa } from './tarefa';

export class Projeto{
    constructor(
        public id: String,
        public nome: string,
        public descricao: string,
        public dataCriacao: Date,
        public tarefas: Tarefa[]
    ){}
}