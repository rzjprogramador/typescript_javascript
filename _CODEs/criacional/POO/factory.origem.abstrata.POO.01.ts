// deno-lint-ignore-file no-unused-vars

// -- Base abstrata para todas entidades --
abstract class BaseEntityPerson<T> {
  public readonly args: T
  protected ID: string

  constructor(args: T, ID: string) {
    this.args = args
    this.ID = ID ?? Date.now().toString()
    // TODO INSERIR UM GERADOR DE HASH PARA ID
  }
}

// -- Types --

interface EntidadeModel extends MembersEntidade {
  ID?: string
  texto1: string
  texto2: string
  num1: number
  num2: number
}

type EntidadeRequest = Omit<EntidadeModel, 'ID'>

interface MembersEntidade {
  metodoInstancias?: () => string
}

// -- Factory baseada na Base_Abstrata --

class FactoryEntidade extends BaseEntityPerson<EntidadeModel> {

  private constructor(args: EntidadeModel, ID: string) {
    super(args, ID)

    // Computar - sobreescreve até o request da instanciacao/criacao
    this.args.texto2 = this.metodoInstancias()  // acessando membros via campos
  }

  static async create(args: EntidadeModel, ID?: string) {
    return await new FactoryEntidade(args, ID!)
    // obs: se desempacotar o args aqui nao reconhece a computação dos membros.
  }

  // members
  metodoInstancias() {
    return `Computando ${this.args.texto1} com ${this.args.texto2} somado >> ${this.args.num1 + this.args.num2} .`;
  }
}

// maker
const makerFactoryEntidade = async (args: EntidadeRequest, ID?: string) => {
  return await FactoryEntidade.create(args, ID)
}

// -- requests --
const request1: EntidadeRequest = { texto1: 'texto1', texto2: 'texto2', num1: 10, num2: 20, }
const request2: EntidadeRequest = { texto1: 'texto_1_Request2', texto2: 'texto_2_Request2', num1: 10, num2: 20, }

// -- Uso Entidade --
// makerFactoryEntidade(request1).then((ok: any) => console.log(ok))

const instancia1 = await makerFactoryEntidade(request1)
// const instancia2 = await makerFactoryEntidade(request2)

console.log(instancia1)
console.log(instancia1?.metodoInstancias?.())

// console.log(instancia2)
// console.log(instancia2.metodoInstancias())

// -- Verificando membros de instancia --
// console.log(instancia1.metodoInstancias === instancia2.metodoInstancias)
// R: true OK - aponta pro mesmo lugar na memoria

/*
DETALHES
instancia_final: "desta forma as instancias finais ficaram com subObjetos inseridos na sua criacao ex: args, não é uma má ideia fica organizado suas props."

sub_objetos: nao precisa criar outros subObjetos igual o args, se precisar de subObjetos criar dentro do type do args/propsmesmo na tipagem, mesmo que sejam preenchidos pelo sistema igual o ID.
*/

export default 1