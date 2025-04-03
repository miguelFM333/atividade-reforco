import { MaterialLeitura } from "./MaterialLeitura";

class Livro implements MaterialLeitura{
    titulo: String
    autor: String
    numeroPagina: number

    constructor(titulo: String, autor: String, numeroPagina: number){
        this.titulo = titulo
        this.autor = autor
        this.numeroPagina = numeroPagina
    }

    exibirDetakhe(): void {
        console.log("Titulo: " + this.titulo + ", Autor: " + this.autor + ", Numero de Paginas: " + this.numeroPagina)
    }
}