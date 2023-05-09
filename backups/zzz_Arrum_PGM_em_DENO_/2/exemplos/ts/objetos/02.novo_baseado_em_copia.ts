// deno-lint-ignore-file no-unused-vars

/* Criar novo objeto com base em copia de outro objeto - escolhendo os membros desejados
*************************************************** */
const objeto2 = { campo10: "vcampo10", campo20: 10 };

/*
rest_spreed : o que for adicionado antes dos ..3pontoVarInventada sera removido, o que for adicionado depois dos ...3pontosObjetoASerCopiado sera adicionado ao novo objeto resultado
diferenca spreed adiciona e rest remove

*/

/*
removendo_campos_para_nao_serem_copiados
escolhendo os membros a serem copiados para o novo objeto - de proposito nao copiando o primeiro campo e pegando o resto */

const { campo10, ...resto } = objeto2;
const newObject = resto;
// console.log(newObject);
// narracao: remove campo10, e copia o resto para esta variavelInventada da fonte objeto2

/*
adicionando_novos_campos_para_a_copia
*/

const novoObj1 = { ...objeto2, new1: "v1", new2: "v2" };
console.log(novoObj1);
// narracao: ...copia tudo de objeto2, e adiciona estes novos campos com estes valores
