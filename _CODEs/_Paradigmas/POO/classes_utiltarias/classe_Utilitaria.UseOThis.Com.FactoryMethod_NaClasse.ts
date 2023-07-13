// -- uso de classe utilitaria que usa o this, usando tecnica factoryMethod onde a propria classe se instancia.

class Entity {
  private campo1!: number
  private campo2!: number

  constructor() {
    this.campo1 = 10
    this.campo2 = 20
  }

  static _preMaker() {
    return new Entity()
  }

  async perform() {
    return await `>>>>>>>>>> Hello Word >> Comput Soma C1+C2 === ${this.campo1 + this.campo2}`
  }
}

const makerEntity = await Entity._preMaker()

console.log(await makerEntity)
console.log(await makerEntity.perform())

export default 1

/*
* Aprendizado:

titulo: "tecnica factoryMethod para criar classe utlitaria podendo usar o this dentro dela e fornecendo um objeto maker para uso fora.",
    categorias: ["configurador_de_objeto", "classe_utilitaria", "uso_this", "factoryMethod", "instanciarPropriaClasse"],
    contexto: "factoryMethod criar metodo static preMaker instanciando a classe , e fora criar o maker chamando a classe executando o statico preMaker() -- ou seja o preMaker é criado no metodo statico dentro da classe e ele é usado fora para gerar o maker",
    conceito: `
    -- o construtor pode estar vazio, porque vamos usar somente seus metodos fora.
    -- podemos usar o this para acessar as props da classe, nao precisa criar props staticas e acessar com a classe.

    -- macete : factoryMethod criar metodo static preMaker instanciando a classe , e fora criar o maker chamando a classe executando o statico preMaker()
    -- ou seja o preMaker é criado no metodo statico dentro da classe e ele é usado fora para gerar o maker.
    `,

exemplos: `

`,

*/
