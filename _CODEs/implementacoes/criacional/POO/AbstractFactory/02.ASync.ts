// deno-lint-ignore-file no-explicit-any

// -- FABRICAR ENTIDADE -- MELHOR FORMA COM CLASSES -- Herança de classe Base abstrata ASYNC --

abstract class BaseEntityPerson<T> {
  protected readonly args: T
  protected ID: string

  constructor(args: T, ID: string) {
    this.args = args
    this.ID = ID ?? '1' // TODO INSERIR UM GERADOR DE HASH PARA ID
  }
}

// -- somente 1 class Entity1 -- Baseada na abstrata BaseEntity --
interface ArgsEntity1 {
  c1: string
  c2: string
}

class Entity1 extends BaseEntityPerson<ArgsEntity1> {
  private constructor(args: ArgsEntity1, ID: string) {
    super(args, ID)
  }

  static async create(args: ArgsEntity1, ID?: string) {
    const entity = new Entity1(args, ID!)
    return await entity
  }

  computavel() {
    return `${this.args.c1} ${this.args.c2}`
  }

}

// Tester
// Sut
const sut = Entity1
const inRequest1 = { c1: 'reinaldo', c2: 'programador' }

// testerConsole
async function show() {
  const instance1 = await sut.create(inRequest1)
  return {
    instance1,
    computavel: instance1.computavel()
  }
}
show().then((d: any) => console.log(d))

/*
Aprendizado:

-- generico: Na montagem do parametrogenerico nao preciso dizer que ele extends algum tipo ou unknown apenas indico o param Letra ex: T

-- Herança de classe Base abstrata -- posso fazer quantas classes quiser seguindo a herança da BaseEntity -- Farei somente agora a class Entity1.

- nao preciso tipar tudo o TS esta inferindo o que é carregado com valor.

- se estiver retornando undefined no console, provavelmente esta dando console.log em funcao que ta retornando console.log , solução : na funcao retorne algo que noa seja console.

*/

