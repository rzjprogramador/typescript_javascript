[
  {
    titulo: "importar e exportar ao mesmo tempo",
    linguagem: "typescript",
    categoria: ["importacao_exportacao", "dependencias"],
    conceito:
      'com export { modulo } from "caminho/" ele ja faz a importacao e exportacao',
    exemplo: 'export { modulo } from "caminho/"',
  },
  {
    titulo: "importar em escopo ts",
    linguagem: "typescript",
    categoria: ["importacao_exportacao", "dependencias"],
    conceito:
      "dentro do escopo>> constante e funcoes só precisa do nome, <tipo> precisa da keyword <type>, <mudavel na importacao> a <default> coloca <default as nomeDoArtefato>",
    exemplo:
      "export { type HttpResponse, type InfoController, ok, minhaConstante,  default as modFoo}",
  },
];
