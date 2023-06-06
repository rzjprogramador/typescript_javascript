const convencao_nomes = {
  nomear_lib: "<iminuscoloENTIDADE> exemplos: [ <libRZ>, ]",
  nomear_interfaces_types:
    "com <I no inicio>, é explicitamente consagrada que é uma interface",

  nomear_makers_types: {
    interno: "IEntidade",
    externo: "IMakerI",
  },

  import_map_variavel: ["@entidade", "exemplos: @externals"],

  nomear_artefato_Base: "_baseEntidade",

  nome_artefato_de_feature:
    "iniciar com _ underline -> para deixar pro uso na replica renomear para nomeOriginal sem _ underline e usar a replica.",

  nomeacoes_Lib: {
    funcionalidades: {
      conceito: "",
      pasta: "feature/ || featFuncionalidade",
      arquivo: "feature.ts ",
    },

    links: {
      conceito:
        "links é um pré main com todos os links das features, que será puxado pelo main distribuir.  faça mesmo que por enquanto nao precise. #futuro",
      pasta: "/ <na raiz>",
      arquivo: "links.ts ",
    },

    principal: {
      conceito:
        "o principal que sempre vai representar lá fora é o main, aqui posso publicar do jeito que vao usar seja em objeto, em repasse de link de funções...vou puxar do links e distribuir a gosto e tipo de uso.",
      pasta: "/ <na raiz>",
      arquivo: "main.ts ",
    },
  },
};
