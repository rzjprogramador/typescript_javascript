// deno-lint-ignore-file no-unused-vars

const pgm_PrioridadesEssenciais = [
  "investigar métodos de terceiros ao usar, foi criado com mesmos códigos que já usamos então, >>  clique no método entre no seu core veja como foi criado, o que ele pede de entrada no construtor ou param de criação, clique nestes tipos verás a estrutura que você terá que argumentar ao usá-lo, veja sua saída o tipo a estrutura entre nela te mostrará o que vc tem que devolver.",

"valor a direita ::pense e formule COMO CHEGAR NESTE VALOR que preciso?",

"Programar defensivamente checando valores em Js sem depender do Typescript.",

"Atenção ao que vem depois do return ou arrowFunction => este é o tipo que se assina-le como retorno da Função.",
"evite jsdoc nomeie bem funções, parâmetros, e types ... para entende-la ao passar o mouse.",
"dependendo do caso ou onde não precisará instâncias, é um objeto de serviço para melhor organização onde precisa de objeto complexo...faça ao invés do objeto, faça uma classe que status ou com maker que se auto instância ",
"evite perder tempo procurando Stack de erro, vai direto na prop error do console e se baseie na classe do erro e resolva ex: ReferenceError já mostrou que é erro de referência. a Stack é só consequência.",
"o que vai ficar mudando o valor tipe como any mesmo q vc saiba seu valor ex: acc do reduce.",
"mesmo que vai receber promessas o pipe não precisa ser async.",
"se precisa devolver promessa e não há tem constru antes o que tem e retorne como promessa forçada da variável construída.",

"usar os prototypes das estruturas [array, objeto, string, number, boolean, types ...] e deles utilizar os seus membros getters que traz dados e setters que configura argumenta escreve dados.",

"importante em validações, na lib o que tiver recebendo replique/relance a exceção, se tiver recebendo um throw , capture este error com catch, e replique do jeito que recuperou relançando a replica de outro throw com o err capturado, passando o lançamento para frente... porque não da certo ficar passando o throw entre camadas sem relançar/replicar... mas se  relançar para frente a cada camada ai sim da certo. ex: exemplo de sucesso é a lib objectValues firstname que captura um throw e relana outro throw com o err capturado...ai sim quem usou capturou a exceção com seus membros de Error e pode manipular.",

]