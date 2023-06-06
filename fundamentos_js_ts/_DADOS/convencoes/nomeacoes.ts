// deno-lint-ignore-file no-unused-vars

interface INomeacao {
  titulo: string;
  categoriaTipoDePropriedade: string;
  conceito: string;
  na_definicao: string;
  membros: string;
  ao_replicar: string;
}

const convencaoNomes: INomeacao[] = [
  {
    titulo: "nomear_lib",
    categoriaTipoDePropriedade: "arquivo_libs",
    conceito: "",
    na_definicao: "<minuscoloENTIDADE> exemplos: [ <libRZ>, ]",
    membros: "#not",
    ao_replicar: "#not",
  },
  {
    titulo: "nomear contratos types interfaces",
    categoriaTipoDePropriedade: "code",
    conceito: "definir com inicio I de interface, e replicar com inicio X .",
    na_definicao: "<I> IEntidade",
    membros: "#not",
    ao_replicar: "<X> XEntidade, exemplos: [ // INomeacao >> XNomeacao, ]",
  },
  {
    titulo: "import_map variável",
    categoriaTipoDePropriedade: "code",
    conceito: "",
    na_definicao: '<@>, exemplos: ["@entidade", "exemplos: @externals", ]',
    membros: "#not",
    ao_replicar: "#not",
  },
  {
    titulo: "nomear_artefato_Base e artefato de distribuição lib",
    categoriaTipoDePropriedade: "code",
    conceito: "",
    na_definicao: "<_ underline> _baseEntidade",
    membros: "#not",
    ao_replicar: "<remove só o underline do inicio>",
  },
  {
    titulo: "nomeacao lib - funcionalidades",
    categoriaTipoDePropriedade: "diretorio_lib",
    conceito: "",
    na_definicao: "feature/ || featFuncionalidade",
    membros: "feature.ts",
    ao_replicar: "#not",
  },
  {
    titulo: "nomeação arquivo link em libs",
    categoriaTipoDePropriedade: "arquivo_link_lib",
    conceito:
      "links é um pré main com todos os links das features, que será puxado pelo main distribuir.  faça mesmo que por enquanto nao precise. #futuro",
    na_definicao: "links.ts",
    membros: "#not",
    ao_replicar: "#not",
  },
  {
    titulo: "nomeação arquivo principal distribuidor lib",
    categoriaTipoDePropriedade: "arquivo principal distribuidor",
    conceito:
      "o principal que sempre vai representar lá fora é o main, aqui posso publicar do jeito que vao usar seja em objeto, em repasse de link de funções...vou puxar do links e distribuir a gosto e tipo de uso.",
    na_definicao: "main.ts",
    membros: "#not",
    ao_replicar: "#not",
  },
  {
    titulo: "",
    categoriaTipoDePropriedade: "",
    conceito: "",
    na_definicao: "",
    membros: "#not",
    ao_replicar: "#not",
  },
  // modelo:
  // {
  //   titulo: "",
  //   categoriaTipoDePropriedade: "",
  //   conceito: "",
  //   na_definicao: "",
  //   membros: "#not",
  //   ao_replicar: "#not",
  // },
];
