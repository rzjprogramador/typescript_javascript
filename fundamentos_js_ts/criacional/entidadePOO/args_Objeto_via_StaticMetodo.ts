type ArgsObjeto = { campo1: string, campo2: string }

class Entidade {
  constructor(
    public readonly args: ArgsObjeto,
  ) {}

  static createEntidade({ campo1, campo2 }: ArgsObjeto) {
    const newObjeto = { campo1, campo2 }
    return new Entidade(newObjeto);
  }

  public nomeCompleto() {
    return `${this.args.campo1} ${this.args.campo2}`;
  }
}

const makeEntidade = Entidade;
const instancia1 = makeEntidade.createEntidade({campo1: "reinaldo", campo2: "zacharias"});

// CONSOLES
console.log("NOME COMPLETO >>>>>  ", instancia1.nomeCompleto());
console.log(instancia1);
export default 1;
