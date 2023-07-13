
class Entity {
  private campo1!: number
  private campo2!: number

  constructor() {
    this.campo1 = 10
    this.campo2 = 20
  }

  async perform() {
    return await `>>>>>>>>>> Hello Word >> Comput Soma C1+C2 === ${this.campo1 + this.campo2}`
  }
}

// o macete é pré instanciar a classe criando um <preMaker>, e depois com a instanciaPremaker fazer o <maker> (objetivo para ser usado fora do arquivo) ou usar o objeto ou usar o metodo do objeto.

const preMaker_IntanceEntity = async () => await new Entity()

const makerEntity = await preMaker_IntanceEntity()

console.log(await makerEntity)
console.log(await makerEntity.perform())

export default 1

/*
* Aprendizado:

titulo: "criar classe utlitaria podendo usar o this dentro dela e fornecendo um objeto maker para uso fora.",
categorias: ["configurador_de_objeto", "classe_utilitaria", "uso_this"],
contexto: "classe utilitaria com this, nao precisando criar staticos para acessos os membros.",
conceito: `
-- o construtor pode estar vazio, porque vamosusar somente seus metodos fora.
-- podemos usar o this para acessar as props da classe, nao precisa criar props staticas e acessar com a classe.
-- préUso : instanciamos a classe para poder usar seu objeto pára criar um maker.
-- guardamos em uma variavel a execucao da préInstancia criando assim um maker.
-- usamos o maker fora da classe -- tendo acesso as seus membros prototypes.

`,
observacoes: "#null",
exemplos: `

`,

*/
