abstract class BaseEntityPerson<T> {
  protected readonly args: T
  protected ID: string

  constructor(args: T, ID: string) {
    this.args = args
    this.ID = ID ?? '1'
  }
}

// Use baseClasse
interface ArgsEntity1 {
  c1: string
  c2: string
}

class Entity1 extends BaseEntityPerson<ArgsEntity1> {
  private constructor(args: ArgsEntity1, ID: string) {
    super(args, ID)
  }

  static create(args: ArgsEntity1, ID?: string) {
    const entity = new Entity1(args, ID!)
    return entity
  }

  computavel() {
    return `${this.args.c1} ${this.args.c2}`
  }

}


// Sut
const inRequest1 = { c1: 'reinaldo', c2: 'programador' }
const instance1 = Entity1.create(inRequest1)

// TesterConsole
// Por ser protected readonly nao compila se tentar mudar sem metodo.
// instance1.args.c1 = 'foo' // da erro em realTime
console.log(instance1)
console.log(instance1.computavel())