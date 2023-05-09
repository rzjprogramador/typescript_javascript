// deno-lint-ignore-file no-unused-vars

/* Criar novo objeto com base em copia de outro objeto - escolhendo os membros desejados
*************************************************** */

const objeto2 = {
  campo10: "vcampo10",
  campo20: 10,
  campo30: true,
  campo40: "foo",
};

// escolhendo os membros a serem copiados para o novo objeto - de proposito nao copiando o primeiro campo e pegando o resto

const objetoCopiado = {
  // obs: Nao copiado o primeiro campo chamado : campo10
  campo20: objeto2.campo20,
  campo30: objeto2.campo30,
  campo40: objeto2.campo40,
};

const newObject = objetoCopiado;
console.log(newObject);
