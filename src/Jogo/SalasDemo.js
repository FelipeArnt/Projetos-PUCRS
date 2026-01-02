import { validate } from "bycontract";
import { Sala, Engine, Ferramenta, Objeto } from "./Basicas.js";
import { Notebook, Descriptografador, Pendrive, CaboEthernet} from "./FerramentasDemo.js";
import { Servidor, Bilhete, ArquivoCriptografado, ServidorAfetado } from "./ObjetosDemo.js";

export class HallEntrada extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("Hall_de_Entrada", engine);
    let descriptografador = new Descriptografador();
    this.ferramentas.set(descriptografador.nome, descriptografador);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);
    return false;
  }
}
// ---------------------------------------------
export class SalaServidor extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("sala_servidor", engine);
    let servidor = new Servidor();
    this.objetos.set(servidor.nome, servidor);
    let caboethernet = new CaboEthernet();
    this.ferramentas.set(caboethernet.nome, caboethernet);

  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);
    if (!this.engine.mochila.tem(ferramenta)) {
      return false;
    }
    if (!this.objetos.has(objeto)) {
      return false;
    }
    let servidor = this.objetos.get(objeto);
    return servidor.usa(this.engine.mochila.pega(ferramenta), objeto);
  
  }

}
// ---------------------------------------------
export class Deposito extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("Deposito", engine);
    let notebook = new Notebook();
    this.ferramentas.set(notebook.nome, notebook);
    let bilhete = new Bilhete();
    this.objetos.set(bilhete.nome, bilhete);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);
    return true;
  }
}
// ---------------------------------------------
export class Laboratorio extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("Laboratorio", engine);
    let servidorAfetado = new ServidorAfetado();
    this.objetos.set(servidorAfetado.nome, servidorAfetado);
    let arquivoCriptografado = new ArquivoCriptografado();
    this.objetos.set(arquivoCriptografado.nome, arquivoCriptografado);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);
    if (!this.engine.mochila.tem(ferramenta)) {
      return false;
    }
    if (!this.objetos.has(objeto)) {
      return false;
    }
    let arquivo = this.objetos.get(objeto);
    let usou = arquivo.usa(this.engine.mochila.pega(ferramenta), objeto);
    if (arquivo instanceof ServidorAfetado && usou == true) {
      this.engine.indicaFimDeJogo();
    }
    return usou;
  }
}
// ---------------------------------------------
