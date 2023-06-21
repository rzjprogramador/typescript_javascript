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
];
