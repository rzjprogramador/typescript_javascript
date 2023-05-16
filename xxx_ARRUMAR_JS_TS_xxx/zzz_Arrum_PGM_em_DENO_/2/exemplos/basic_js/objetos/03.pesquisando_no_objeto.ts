// deno-lint-ignore-file no-unused-vars no-explicit-any

const objeto3 = { campo1: "valor_campo1", campo2: 10 };

/* Pesquisando no Objeto :
-
*************************************************** */

// pesquisando_chaves
function pesquisaChaveNoObjeto(input: string) {
  if (Object.getOwnPropertyNames(objeto3)[1] === input) {
    return true;
  } else {
    return false;
  }
}
console.log(pesquisaChaveNoObjeto("campo20"));
// console.log(Object.getOwnPropertyNames(objeto3)[1]); // pegando chave desejada manualmente por posicao no array que devolve o metodo

// pesquisando_valor_das_chaves
function pesquisaValorEmChaveDeObjeto(obj: any) {
  if (obj.campo1 === "valor_campo1") {
    return true;
  } else {
    return false;
  }
}
console.log(pesquisaValorEmChaveDeObjeto(objeto3));
