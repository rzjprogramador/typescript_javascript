class Entidade {
  constructor(
    public readonly campo1: string,
    public readonly campo2: string,
  ) {}

  static createEntidade(campo1: string, campo2: string) {
    return new Entidade(campo1, campo2);
  }

  public nomeCompleto() {
    return `${this.campo1} ${this.campo2}`;
  }
}

const makeEntidade = Entidade;
const instancia1 = makeEntidade.createEntidade("reinaldo", "zacharias");

// CONSOLES
console.log("NOME COMPLETO >>>>>  ", instancia1.nomeCompleto());
console.log(instancia1);
export default 1;
