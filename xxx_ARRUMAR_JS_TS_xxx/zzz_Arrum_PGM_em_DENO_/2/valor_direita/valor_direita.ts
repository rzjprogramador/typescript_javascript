/*
 valor_direita:
  conceito: tudo que retorna um resultado pode ser uma valor a direita.
  possiveis: [ operacao, funcao, objeto, metodo, instanciacao, referencia, link]
*/

// variaveis-uso
const numero1 = 10;
const numero2 = 20;

// const funcaoOperacaoLogica = () => (Number(numero1) === numero2) ? true : false;
// const funcaoOperacaoComparacao = () => (Number(numero1) !== numero2) ? true : false;
const funcaoFactoryRetornaObjeto = () => ({
  nome: "rei",
  idade: 45,
  contratado: true,
});

// valor_direita
const valorOperacaoSoma = 10 + 10;
const valorOperacaoLogica = Number(numero1) === numero2 ? true : false;
const valorOperacaoComparacao = Number(numero1) !== numero2 ? true : false;
const valorFuncaoRetornavelObjeto = funcaoFactoryRetornaObjeto();

console.log(
  valorOperacaoSoma,
  valorOperacaoLogica,
  valorOperacaoComparacao,
  valorFuncaoRetornavelObjeto,
);
