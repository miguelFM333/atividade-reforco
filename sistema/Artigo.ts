import { MaterialLeitura } from "./MaterialLeitura";

export class Artigo implements MaterialLeitura{
    titulo: String;
    autor: String;
    dataPublicacao: Date;

    constructor(titulo: String, autor: String, dataPublicacao: Date){
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetakhe(): void {
        console.log("titulo: " + this.titulo + ", autor: " + this.autor + ", data de publicação: " + this.dataPublicacao)
    }
}