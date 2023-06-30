
type Arg1 = {
  c1: string
  c2: string
}
type ResponseLib1 = {
  c1: string
  c2: string
  metodo1: () => string
}

/**
 * @description Metodo lib1 - descricao aqui
 * @param param0  informando os params
 */

const lib1 = (arg: Arg1): ResponseLib1 => {
  return {
    c1: arg.c1,
    c2: arg.c2,
    metodo1: () => `Ola sou um metodo1 retorno.`
  }
}


export {
  lib1,
  type Arg1,
  type ResponseLib1
}