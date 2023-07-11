
interface ArgsEntity extends MembersEntity {
  ID?: string
  text1: string
  text2: string
  num1: number
  num2: number
}

interface MembersEntity {
  membro1?: () => string
}

class Entity {
  public readonly ID?: string

  public readonly text1!: string;
  public readonly text2!: string
  public readonly num1!: number
  public readonly num2!: number
  public readonly resultadoNum1Num2!: string

  constructor(args: ArgsEntity) {
    Object.assign(this, args)

    if (!this.ID) {
      this.ID = args?.ID || '1'
    }
    // computando campos com metodos auxiliares
    this.resultadoNum1Num2 = this.membro2()
  }

  membro1() {
    return `computado >> ${this.text1} ++ ${this.text2}`
  }

  membro2() {
    return `computando a soma dos campos num1+num2 resultado >> ${this.num1 + this.num2}`
  }
}

const makeCreateEntity = (args: ArgsEntity) => {
  return new Entity(args)
}

// --Uso -- ----------------------------------------------
const request1: ArgsEntity = {
  text1: 'reinaldo', text2: 'programador', num1: 10, num2: 20,
}

const instance1 = makeCreateEntity(request1)
// instance1.text1 = 'foo' // erro na compilacao -ao tentar reatribuir prop fora da classe >> porque a prop é  - somente leitura.

console.log(instance1)
console.log(instance1.text1)
console.log(instance1?.membro1?.())
console.log(instance1?.membro2?.())

export default 1

/*
APRENDIZADO:

tecnica Classe Factory SolidaSimples

nao_precisa: definir metodo create statico nao precisa porque as instancia serao criadas pelo poloUnico makeCreateEntity() unico a ser exportado deste arquivo.

membros: tem que ter instancia criada, a interface dos args extender os membros todos opcionais.

*/
