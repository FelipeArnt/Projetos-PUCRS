import { validate } from "bycontract";
import { Objeto, Ferramenta } from "./Basicas.js";
import { Descriptografador, Notebook, Pendrive, CaboEthernet } from "./FerramentasDemo.js";

export class Servidor extends Objeto {
  constructor() {
    super("servidor", "Serv1d0r at4ckad0 jdakmxljox knxcy78uhdn uicxuhia nmuusaddnsja.",
      "O servidor principal foi criptografado e apenas um brute-force attack para tal criptografia...");
  }

  usa(ferramenta, objeto) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof Descriptografador) {
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}
// ---------------------------------------------
export class Bilhete extends Objeto {
  constructor() {
    super("bilhete", "Há um bilhete, nele está escrito Senha para reparo do servidor: admin123", "A senha não é efetiva nesse cenário...");
  }

  usa(ferramenta, objeto) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof Descriptografador){
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}

// ---------------------------------------------
export class ServidorAfetado extends Objeto {
  constructor() {
    super("servidor_afetado", "O servidor principal foi afetado!",
      "[INFO] Servidor em modo de compatibilidade...");
  }

  usa(ferramenta, objeto) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof Notebook) {
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}
// ---------------------------------------------
export class ArquivoCriptografado extends Objeto {
  constructor() {
    super("arquivo_criptografado", "AR56NTT2Xcaucb77HJhdbj_djida=zs0",
      "Para realizar um brute-force é necessário ferramentas cibernéticas...");
  }

  usa(ferramenta, objeto) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof Descriptografador) {
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}
// ---------------------------------------------
