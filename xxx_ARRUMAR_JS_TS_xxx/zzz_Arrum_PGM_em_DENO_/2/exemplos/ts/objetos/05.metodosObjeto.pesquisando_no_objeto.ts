// deno-lint-ignore-file no-unused-vars

const objeto4 = { campo1: "valor_campo1", campo2: 10 };

/* Metodos de Objeto :: Pesquisando no Objeto :

*************************************************** */

/* retorna todas chaves do objeto passado ::
- em vetor :: metodo: Object.keys( obj )
*************************************************** */
const todasChavesDoObjeto4 = Object.keys(objeto4);
console.log(todasChavesDoObjeto4);

/* retorna todos os valores do objeto passado
- obs: os sub_objetos retornam um objeto com chave e valor. :: metodo: Object.values( obj )
*************************************************** */
const todosValoresDoObjeto4 = Object.values(objeto4);
console.log(todosValoresDoObjeto4);

/* descobrir tamanho do objeto em chaves
- transformar as chaves do obj em array e usar o metodo length de arrays.
*************************************************** */
const sizeObjectInKeys = Object.keys(objeto4).length;
console.log(sizeObjectInKeys);
