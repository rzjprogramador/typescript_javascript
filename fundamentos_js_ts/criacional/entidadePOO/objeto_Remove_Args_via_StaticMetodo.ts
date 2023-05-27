interface ArgsEntidade {
  campo1: string;
  campo2: string;

  members?: MemberEntidade;
}

interface MemberEntidade {
  nomeCompleto: (this: ArgsEntidade) => string;
}

class Entidade {
  private constructor(
    public readonly args: ArgsEntidade,
  ) {
    this.args = args;
  }

  static createEntidade(a: ArgsEntidade) {
    const input = a;
    const newEntity = new Entidade(input);
    return newEntity.args;
  }

  public nomeCompleto(this: ArgsEntidade) {
    return `${this.campo1} ${this.campo2}`;
  }
}

const makeEntidade = Entidade;
const instancia1 = makeEntidade.createEntidade({
  campo1: "reinaldo",
  campo2: "zacharias",
});

// CONSOLES
// console.log("NOME COMPLETO >>>>>  ", instancia1.members?.nomeCompleto());
// TODO NAO CONSIGO USAR O THIS DO OBJETO - RETORNA UNDEFINED
console.log(instancia1);
export default 1;
