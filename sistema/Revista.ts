import { MaterialLeitura } from "./MaterialLeitura";

class Revista implements MaterialLeitura{
    titulo: String;
    autor: String;
    edicao: number;

    constructor(titulo: String, autor: String, edicao: number){
        titulo = this.titulo;
        autor = this.autor;
        edicao = this.edicao;
    }

    exibirDetakhe(): void {
        console.log("titulo: " + this.titulo + ", Autor: " + this.autor + ", Edição: " + this.edicao)
    }
}