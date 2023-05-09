// deno-lint-ignore-file no-unused-vars no-explicit-any no-prototype-builtins prefer-const

const objeto4 = { campo1: "valor_campo1", campo2: 10, campo3: true };

/* # descobrir_chaves
*************************************************** */

function descobrir_chaves(obj: any) {
  // #TODO
}
// console.log(descobrir_chaves(objeto4));

/* # descobrir_achave_atravez_do_valor_passado
*************************************************** */

function descobrir_achave_atravez_do_valor_passado(val: any, obj: any) {
  for (let key in obj) {
    if (obj[key] == val) {
      return key;
    }
  }
  return false;
}
console.log(descobrir_achave_atravez_do_valor_passado("valor_campo1", objeto4));

/* # descobrir_valores
*************************************************** */

function descobrir_valores(obj: any) {
  // #TODO
}
// console.log(descobrir_valores(objeto4));

/* descobrir_tamanho_obj em chaves
- inicia o contadorDeTamanho em 0
- define a chave sem valor
- percorre - verificando se tem a chave no objeto
- verifica: se o objeto tiver a chave da rodada , aumenta o tamanho do contadorDeTamanho.
- retorna o contadorDeTamanho atualizado
*************************************************** */

function descobrir_tamanho_obj(obj: any) {
  let size = 0;
  let key: any;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
}
// console.log(descobrir_tamanho_obj(objeto4));
