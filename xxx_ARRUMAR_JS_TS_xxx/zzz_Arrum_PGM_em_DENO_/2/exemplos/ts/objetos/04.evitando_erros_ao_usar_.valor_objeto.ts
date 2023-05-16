/*
# evitando_erros_ao_usar_valor_objeto
  utilizar o operador '?' optionalChaining/encadeamentoOpcional antes de abrir possivel membro<prop. ou metodo>

  detalhe: sempre verifica se existe com '?' e depois abre com '.' ponto ...mesmo que seja metodo a ser recuperado use '?.' antes dos () parenteses.

  adicionando_valor_padrao: caso a prop recuperada nao tiver um valorValido <for null ou undefined> com o operador '??' Nullish_coalescing / seNadaValidoTiver

*/

const obj3 = {
  c1: "valor c1",
  c2: null,
  subObj: {
    sub1: "valor s1",
    sub2: "valor s2",
  },
  metodo() {
    return "valor do metodo no obj";
  },

  metodoSemValorValido() {
    return null;
  },
};

const recuperaC1 = obj3?.c1;
console.log(recuperaC1);

const recuperaC2ComPadrao = obj3?.c2 ?? "valorDefault...nada informado";
console.log(recuperaC2ComPadrao); // de proposito c2 é nulo

const recuperaMetodoObj = obj3?.metodo?.();
console.log(recuperaMetodoObj);

// Se a prop nao existe - ja vai dar erro no linter - se ele existe mas naoTemvalorValido assume o ?? <valorPadraoAquiPassado>
const recuperaMetodoNoObjQueNaoExiste = obj3?.metodoSemValorValido?.() ??
  "Este metodo existe mas :: nao retorna um valor valido :: retorna nulo";
console.log(recuperaMetodoNoObjQueNaoExiste);
