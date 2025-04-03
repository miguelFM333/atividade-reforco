import { MaterialLeitura } from "./MaterialLeitura";

export class Revista implements MaterialLeitura{
    titulo: String;
    autor: String;
    edicao: number;

    constructor(titulo: String, autor: String, edicao: number){
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }

    exibirDetakhe(): void {
        console.log("titulo: " + this.titulo + ", Autor: " + this.autor + ", Edição: " + this.edicao)
    }
}