
class Entity {
  private campo1!: number
  private campo2!: number

  constructor() {
    this.campo1 = 10
    this.campo2 = 20
  }
  // obs: o construtor pode estar vazio, porque vamosusar somente seus metodos fora.

  async perform() {
    return await `>>>>>>>>>> Hello Word >> Comput Soma C1+C2 === ${this.campo1 + this.campo2}`
  }
}

// -- préUso: instanciamos a classe para poder usar seu objeto pára criar um maker.
const intanceEntity = async () => await new Entity()

// -- guardamos em uma variavel a execucao da préInstancia criando assim um maker
const makerInstance = await intanceEntity()

// -- usamos o maker fora da classe -- tendo acesso as seus membros prototypes.
console.log(await makerInstance)
console.log(await makerInstance.perform())

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
