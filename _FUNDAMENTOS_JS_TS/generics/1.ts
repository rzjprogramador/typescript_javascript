
const soma = <T extends unknown>(a: T, b: T): T => {
  const res = a + b
  // TODO QUANDO É UMA OPERACAO QUE NAO TEM COMO FAZER COM OUTRO TIPO O TS IMPEDE QUE SE FORÇE UM GENERICO
  // NESTE CASO AQUI SÓ PODE SER NUMERO O TIPO DOS PARAMS.
  return res
}
console.log(soma<number>(10, 40))