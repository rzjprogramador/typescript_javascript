// deno-lint-ignore-file no-unused-vars

interface Args {
  c1: string
  c2: string
}

const membersEntity = {

  membro1(this: Args) {
    return this.c1
  },

  membro2(this: Args) {
    return `${this.c2}`
  }
}

const factoryEntity = async (args: Args) => {
  const factory = await Object.create(membersEntity)
  return await Object.assign(factory, args)
}

export default 1

/*
TODO: COMPUTAR O CAMPO IDADE - SEM CRIAR UM NOVO FORA DO OBJ.

no maker tive que retornar .props que é o empacota as props usadas no construtor.
e apra poder acessar essa props tive que deixar public a sua configuracao, mas protegida com Readonly somente leitura após primeira atribuição ou atribuição via metodo.
*/