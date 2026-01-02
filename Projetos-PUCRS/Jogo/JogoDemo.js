import { Engine } from "./Basicas.js"
import { Laboratorio, HallEntrada, Deposito, SalaServidor } from "./SalasDemo.js";

export class JogoDemo extends Engine {
  constructor() {
    super();
  }

  criaCenario() {
    // Define as salas que compõem o mapa
    let hall = new HallEntrada(this);
    let salaservidor = new SalaServidor(this);
    let laboratorio = new Laboratorio(this);
    let deposito = new Deposito(this);

    // Encadeia as salas através das portas (conexões bidirecionais)
    hall.portas.set(laboratorio.nome, laboratorio);
    laboratorio.portas.set(hall.nome, hall);
    laboratorio.portas.set(salaservidor.nome, salaservidor);
    laboratorio.portas.set(deposito.nome, deposito);
    salaservidor.portas.set(laboratorio.nome, laboratorio);
    deposito.portas.set(laboratorio.nome, laboratorio);


    //salaservidor.portas.set(hall.nome, hall);
    //salaservidor.portas.set(laboratorio.nome, laboratorio);
    //salaservidor.portas.set(deposito.nome, deposito);
    
    // laboratorio.portas.set(salaservidor.nome, salaservidor);
    //deposito.portas.set(salaservidor.nome, salaservidor);

    // Define a sala inicial
    this.salaCorrente = hall;
  }
}
