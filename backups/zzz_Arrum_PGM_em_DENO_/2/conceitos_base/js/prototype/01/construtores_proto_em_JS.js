// deno-lint-ignore-file no-unused-vars

// Construtores/Tipos Personalizados

function Entity2(primeiroNome, sobrenome, idade) {
  this.primeiroNome = primeiroNome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// add membros metodos no proto do construtor criado:

Entity2.prototype.nomeCompleto = function nomeCompleto() {
  return `${this.primeiroNome} ${this.sobrenome}`;
};

Entity2.prototype.comment = function comment() {
  return `${this.primeiroNome} fez um comentario...`;
};

Entity2.metodoEstaticoUppereHanderline =
  function metodoEstaticoUppereHanderline(texto) {
    return texto
      .toUpperCase()
      .replaceAll(" ", "_");
  };

const e1 = new Entity2("reinaldo", "zacharias", 45);
const e2 = new Entity2("gustavo", "eduardo", 13);

/* *************************************************** */

// sobreescrevendo metodo que ja tem no proto ...criando ele no proto da instancia o mesmo nome de metodo que tem no seu proto nativo - a engine_js executa o primeiroq eu encontra quando tem o emsmo nome :: obs: importante >> nao recomendavel.

// e1.toString = function toString() {
//   return `meu texto para mostrar no tostring das instancias ao invez de [object object]`;
// };
// console.log("sobreescrevendo metodoProto >> ", e1.toString());

/* *************************************************** */

// membros Staticos do construtor

console.log("acessa membros atrelados do construtor", Entity2.prototype);
console.log(
  "acessando metodoEstatico via Construtor",
  Entity2.metodoEstaticoUppereHanderline("frase1 frase2 frase3 "),
);

console.dir(Entity2); // console.dir mostra os membros do Construtor estaticos e proto

/* *************************************************** */

// membros de Prototype das Instancias
console.log(e1, e2);
console.log(e1.nomeCompleto());
console.log(
  "se instancias apontam para o mesmo metodo no proto",
  e1.nomeCompleto === e2.nomeCompleto,
); // true

console.log(e1.comment(), e2.comment());
console.log("descobrir nome do construtor da instancia", e1.constructor.name);

/* *************************************************** */

/*
# construtores_tipos_personalizados:

construtor: "construtor sao TiposPersonalizados e TiposNativos

exemploConstrutoresPersonalizados: personalizadas: ClasseNome | FuncaoNome ...,

exemploConstrutoresNativos: Array, Object, Function, String, Number, Boolean, etc..,

ver_membros: "no consoleWeb ou no proprio codigo ao digitarmos o nome do construtor seguido de ponto '.' e temos acesso aos seus membros.

propriedades_de_construtores: e todos contem membros na prop. prototype e estaticos ... quando ele é referenciado podemos ver os membros nele direto que sao estaticos ou membros do seu proto que sao para todas instancias"

explorando_membros: "ao referenciar o nome do Construtor. 'ponto' os primeiros membros sao os estaticos acessiveis para o ConstrutorEntidade e acessamos como prop. getter sem executar ou executando depende da funcao. ex: Entity2.length tamanhoEmProps da entidade //  Entity2.name // nome do ConstrutorEntidade

depois vem a prop. prototype que sao metodos para as instancias para usarmos temos referenciar a instancia.membro ou intancia.membro() ex: e2.hasOwnProperty("primeiroNome") // esta instancia tem esta propriedade "

membros_estatico: "estaticos acessamos referenciando o construtor, e esta disponivel somente para este construtorEntidade ex: Entity2.membro",

aplicabilidade_membro_estatico: "membro estatico é util em rotinas utilitarias que nao tem nada a haver com as instancias..beneficio: nao polui o proto das instancias ja que o membro é global ta disponivel para todos na app. , para usar só referenciar o construtor.membro"

criar_membro_estatico: "é o mesmo de criar metodo proto mas sem a prop. prototype na criacao , atribui o membroNovo direto no construtor , ex: "

visualizar_todos_membros_do_Construtor: "console.dir( ConstrutorAlvo ) , mostra os membros do Construtor estaticos e proto"

membros_prototype: "membrosPrototype, acessamos atraves das instancias e esta disponivel para estas instancias ex: e1.membro",

getter_mostra_membros_no_prototype_do_objeto_investigado: "FuncaoConstrutora.prototype || Entity2.prototype  // ja estarei dentro da prop. __proto__ e vai mostrar o construtor e os metodos disponives e criados no proto. ,",

engine_busca_por_metodos_chamados: "Ela busca no objeto|array, se nao encontra busca na propNativa __proto__."

criar_membro_no_proto_da_EntidadeObjeto: "usa o .prototype como setter inventa o nomeDoMembro e atribui para ele o que deseja criar no proto dele no caso uma funcao e usa os campos do objeto, importante nomear esta atribuicao e nao fazer anonima para ter acesso a prop. name que devolve o nome do membro criado apra casos de debugger"

membros_disponiveis:
  construtor: "construtor tem membros Estaticos",
  instancias: "instancias tem membros na prop. prototype || __proto__.",

membros_mais_usados_Estaticos_Construtor: `

- tamanho_em_props_no_construtor: "`Construtor.length`",
- nome_do_construtor : "`Construtor.name`",
- se_construtores_apontam_para_o_mesmo_prototype_nativo: "`Construtor1.prototype === Construtor2.prototype`",


`,

membros_mais_usados_Instancias: `

- se_membro_instancias_apontam_para_mesmo_construtor: "`instancia1.nomeCompleto === instancia1.nomeCompleto` // quer dizer que o metodo esta no proto do construtor",

- contem_a_propriedade_na_instancia: "`instancia.hasOwnProperty("primeiroNome")` // retorna boleano se tem a passada propriedade na instancia",

- instancia_esta_no_proto_do_construtor: "`Construtor.prototype.isPrototypeOf(instancia)` // isPrototypeOf checa se a instancia passada existe na cadeia de prototipos do ConstrutorReferenciado , doc: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/IsPrototypeOf",

- descobrir_nome_do_construtor_da_instancia: "`instancia.constructor.name`",

`,

- sobreescrevendo_metodo_que_ja_tem_no_proto: recriando ele e atribuindo a instancia o mesmo nome de metodo que tem no seu proto nativo - a engine_js executa o primeiroq eu encontra quando tem o emsmo nome :: obs: importante >> nao recomendavel.
e1.toString = function toString() {
  return `meu texto para mostrar no tostring das instancias ao invez de [object object]`;
};
console.log("sobreescrevendo metodoProto >> ", e1.toString());


*/
