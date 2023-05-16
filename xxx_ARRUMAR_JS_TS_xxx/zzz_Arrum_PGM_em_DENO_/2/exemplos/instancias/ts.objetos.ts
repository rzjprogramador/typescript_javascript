import { Objetos } from "../../entity/objetos.ts";

const ts_objetos = new Objetos({
  nome: "Objetos Ts",
  extrair_membros: {
    conceito: "desestruturacao é extrair props de um objeto e deixa-las livre no escopo para reuso, tambem podemos fazer copias do objeto e decidir se nesta copia adicionamos ou removemos campos.",
    exemplo: `
    ~~~
    // exemplo
    // Desestruturacao
    const objeto1 = { campo1: "vcampo1", campo2: 10 };

    const { campo1 } = objeto1;
    console.log(campo1);
    ~~~
    `,
  },

  removendo_campos_para_nao_serem_copiados: {
    conceito:
      "rest_spreed : o que for adicionado antes dos ..3pontoVarInventada sera removido do resultado da copia.",

    detalhe:
      ``,

    exemplo: `
    ~~~
    /*
    removendo_campos_para_nao_serem_copiados
    escolhendo os membros a serem copiados para o novo objeto - de proposito nao copiando o primeiro campo e pegando o resto */

    const { campo10, ...resto } = objeto2;
    const newObject = resto;
    console.log(newObject);
    // narracao: remove campo10, e copia o resto para esta variavelInventada da fonte objeto2

    ~~~
    `,
  },

  adicionando_novos_campos_para_a_copia: {
    conceito:
      `o que for adicionado depois dos ...3pontosObjetoASerCopiado sera adicionado ao novo objeto resultado
    diferenca spreed adiciona e rest remove`,

    detalhe:
      `rest_spreed : o que for adicionado antes dos ..3pontoVarInventada sera removido, 
      spreed : o que for adicionado depois dos ...3pontosObjetoASerCopiado sera adicionado ao novo objeto resultado
    diferenca spreed adiciona e rest remove`,

    exemplo: `
    ~~~
    /*
    adicionando_novos_campos_para_a_copia
    */

    const novoObj1 = { ...objeto2, new1: "v1", new2: "v2" };
    console.log(novoObj1);
    // narracao: ...copia tudo de objeto2, e adiciona estes novos campos com estes valores

    ~~~
    `,
  },

  pesquisando_no_objeto: {
    conceito:
      `- com operador 'in' verifica somente se tem a chave passada no objeto.
    - com metodoProto 'obj.prop.includes("pesquisa")' verifica somente se tem o 'valor pesquisado na chave do objeto passado`,
    exemplo: `
    ~~~
    // exemplo
    const objeto3 = { campo1: "valor_campo1", campo2: 10 };
    
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
    ~~~
    `,
  },

  retornar_todas_chaves: {
    conceito:
      " retorna todas chaves do objeto passado :: em vetor :: metodo: Object.keys( obj )",
    exemplo: `
    ~~~
    // exemplo
    const objeto4 = { campo1: "valor_campo1", campo2: 10, campo3: true };
    
    const todasChavesDoObjeto4 = Object.keys(objeto4);
    console.log(todasChavesDoObjeto4);
    ~~~
    `,
  },

  retornar_todos_valores: {
    conceito:
      "retorna todos os valores do objeto passado - obs: os sub_objetos retornam um objeto com chave e valor. :: metodo: Object.values( obj )",
    exemplo: `
    ~~~
    // exemplo
    const objeto4 = { campo1: "valor_campo1", campo2: 10, campo3: true };

    const todosValoresDoObjeto4 = Object.values(objeto4);
    console.log(todosValoresDoObjeto4);
    ~~~
    `,
  },

  descobrir_tamanho: {
    conceito:
      "descobrir tamanho do objeto em chaves - transformar as chaves do obj em array e usar o metodo length de arrays.",
    exemplo: `
    ~~~
    // exemplo
    const objeto4 = { campo1: "valor_campo1", campo2: 10, campo3: true };

    const sizeObjectInKeys = Object.keys(objeto4).length;
    console.log(sizeObjectInKeys);
    ~~~
    `,
  },
});
console.log(ts_objetos);
