import { Artigo } from "./Artigo";
import { Livro } from "./Livro";
import { Revista } from "./Revista";

let artigo: Artigo = new Artigo("Oie", "Miguel", new Date(2020, 10, 31))
artigo.exibirDetakhe;

let livro: Livro = new Livro("Voce", "Jonas", 856)
livro.exibirDetakhe;

let revista: Revista = new Revista("Nós", "klick", 5)
revista.exibirDetakhe;