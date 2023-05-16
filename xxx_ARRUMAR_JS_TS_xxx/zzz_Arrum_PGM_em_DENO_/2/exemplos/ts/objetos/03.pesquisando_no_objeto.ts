// deno-lint-ignore-file no-unused-vars

const objeto3 = { campo1: "valor_campo1", campo2: 10 };

/* Pesquisando no Objeto :
- com operador 'in' verifica somente se tem a chave passada no objeto.
- com metodoProto 'obj.prop.includes("pesquisa")' verifica somente se tem o 'valor pesquisado na chave do objeto passado'.
*************************************************** */

// pesquisando_chaves
const existeEstaChave1 = "campo1" in objeto3;
const existeEstaChave2 = "campo_foo" in objeto3;

// pesquisando_valor_das_chaves
const existeEsteValorNaChave1 = objeto3.campo1.includes("valor_campo1");
const existeEsteValorNaChave1_2 = objeto3.campo1.includes("foo");

console.log(existeEstaChave1);
console.log(existeEstaChave2);
console.log(existeEsteValorNaChave1);
console.log(existeEsteValorNaChave1_2);
