// deno-lint-ignore-file no-explicit-any

type ArgsObjeto = {
  campo1: string;
  campo2: string;
};

class Entidade {

  constructor(
    private readonly objeto: ArgsObjeto,
  ) {
    this.objeto.campo1 = objeto.campo1
    this.objeto.campo2 = objeto.campo2
  }
}

const input1 = { campo1: "valorCampo1" , campo2: "valorCampo2" };
const input2 = { campo1: "valorCampo1", campo2: "valorCampo2"  };

const instancia1 = new Entidade(input1)
const instancia2 = new Entidade(input2)

console.log(instancia1)
// console.log(instancia2)

export default 1;
