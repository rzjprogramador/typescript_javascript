// -- Base --

abstract class BaseEntityPerson<T> {
  public readonly args: T
  // protected ID: string

  constructor(args: T, ID: string) {
    this.args = args
    // this.ID = ID ?? '1' // TODO INSERIR UM GERADOR DE HASH PARA ID
  }
}

// -- Types --
interface ArgsEntidade {
  ID?: string
  texto1: string
  texto2: string
  num1: number
  num2: number
}

// -- Factory apartir da Base --

class FactoryEntidade extends BaseEntityPerson<ArgsEntidade> {
  private constructor(args: ArgsEntidade, ID: string) {
    super(args, ID)
  }

  static async create(args: ArgsEntidade, ID?: string) {
    const entity = new FactoryEntidade(args, ID!)
    return await entity
  }

  // members
  metodoInstancias() {
    return `Ola sou metodo para todas istancias .. computando ${this.args.texto1} com ${this.args.texto2} computando numeros num1+num2 == >> ${this.args.num1 + this.args.num2} .`;
  }
}

// maker
const makerFactoryEntidade = async (args: ArgsEntidade, ID?: string) => {
  return await FactoryEntidade.create(args, ID)
}

// -- requests --
const request1 = {
  texto1: 'texto1',
  texto2: 'texto2',
  num1: 10,
  num2: 20,
}

// -- Uso Entidade --
// makerFactoryEntidade(request1).then((ok: any) => console.log(ok))

const instancia1 = await makerFactoryEntidade(request1)

console.log(instancia1)
console.log(instancia1.metodoInstancias())