import { MaterialLeitura } from "./MaterialLeitura";

class Artigo implements MaterialLeitura{
    titulo: String;
    autor: String;
    dataPublicacao: Date;

    constructor(titulo: String, autor: String, dataPublicacao: Date){
        titulo = this.titulo;
        autor = this.autor;
        dataPublicacao = this.dataPublicacao;
    }

    exibirDetakhe(): void {
        console.log("titulo: " + this.titulo + ", autor: " + this.autor + ", data de publicação: " + this.dataPublicacao)
    }
}