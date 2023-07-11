[
  {
    titulo: "",
    mensagem: "",
    traducao: "",
    codigo: "deno-ts()",
    causa: "",
    solucao: "",
    solucao_narrada: "",
  },
  {
    titulo: "erro ao tentar tipar artefatos que retornam operadores.",
    mensagem: "Operator 'OPERADOR USADO' cannot be applied to types [ VARIAVEIS QUE VC TENTOU TIPAR COM GENERICO ]",
    traducao: "O operador 'OPERADOR USADO' não pode ser aplicado a tipos [ VARIAVEIS QUE VC TENTOU TIPAR COM GENERICO ]",
    codigo: "deno-ts(2365)",
    causa: `
    Retornos que usam operadores não podem usar generics no artefato porque operadores ja tem seus tipos de retornos default nao podem ser substituidos que é a missão do generics é incompativel e tomará o erro : Operator 'OPERADOR USADO' cannot be applied to types
    `,
    solucao: "",
    solucao_narrada: "",
  },
  {
    titulo: "erro_tempo_real >> se_possivel_indefinido",
    mensagem: "is possibly 'undefined'",
    traducao: "é possivel que seja indefinido a variavel pode nao existir",
    codigo: "deno-ts(18048)",
    causa:
      "sempre que definir uma prop. opcional na sua tipagem vai dizer que ela é possivelmente sem definicao.",
    solucao:
      "adicionar ```!``` add interrogacao apos variavel para afirmar que ela sera definida",
    solucao_narrada: "Afirmo Pode confiar que vai existir este artefato.",
  },
  {
    titulo: "erro de atribuicoes em artefatoPAI SEM interface tipo",
    mensagem: "is not assignable to parameter of type 'never'.deno-ts(2345)",
    traducao: "não pode ser atribuído ao parâmetro do tipo 'nunca'",
    codigo: "deno-ts(2345)",
    causa: "O QUE VOCÊ ESTA TENTANDO PREENCHER NÃO ESTÁ TIPADO.",
    solucao: "CRIAR TIPO INTERFACE AO ARTEFATO PAI",
    solucao_narrada: "exemplo, se esta tentando preencher um array e este array não esta tipado vai dar este erro  -- solução tipe este array em questao.",
  },
  {
    titulo: "erro de retorno em <funcao arrow> quando for retornar diretamente um objeto",
    mensagem: "is not assignable to parameter of type 'never'.deno-ts(2345)",
    traducao: "Uma função cujo tipo declarado não é 'void' nem 'any' deve retornar um valor.deno-ts(2355)",
    codigo: "deno-ts(2355)",
    causa: "FALTA DE () PARENTESES ENVOLVENDO O OBJETO DIRETAMENTE RETORNADO",
    solucao: "APÓS A ARROW FUNCTION => ENVOLVER ENTRE PARENTESES O OBJETO DIRETAMENTE RETORNADO.",
    solucao_narrada: "Em uma funcao arrow => Se for devolver diretamente um objeto => envolva ele entre parenteses. ex: => ( { campo1, cmapo2 }) ",
  },
];
