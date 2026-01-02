import {Ferramenta} from "./Basicas.js";

// ---------------------------------------------
export class Descriptografador extends Ferramenta {
	constructor() {
		super("descriptografador");
	}
}
// ---------------------------------------------
export class Pendrive extends Ferramenta {
	constructor() {
		super("pendrive");
	}
}
// ---------------------------------------------
export class Notebook extends Ferramenta {
  constructor(){
    super("notebook-kali");
  }
}
export class CaboEthernet extends Ferramenta{
  constructor(){
    super("caboethernet");
  }
}

