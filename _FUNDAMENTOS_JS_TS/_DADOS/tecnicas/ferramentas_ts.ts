// deno-lint-ignore-file no-unused-vars
const ferramentas_ts = [
  {
    titulo: "",
    categorias: ["ferramentas_ts",],
    contexto: "",
    conceito: "",
    observacoes: "#null",
  },
  {
    titulo: "generics typescript",
    categorias: ["ferramentas_ts",],
    contexto: "configurador de tipos , deixam os tipos como parametros dinamicos, dando flexibilidade na hora de invocar/usar e tipar o artefato [sendo ele variável, objeto, função, classe, type]",
    conceito: `
    parametro generico precisa definir um tipo default na sua montagem, então configure como desconhecido ainda de inicio <unknown>, somente no uso será conhecido quando eu tipar sobreescrever este desconhecido default.
    `,
    observacoes: `
    // delimitadoresde parametros genericos... diferente de funcoes que sao parenteses() em genericos são <> exemplo: <T>
    adicione os delimitadores de params genericos <> antes de () em constantes, em funcoesNomeadas insira os delimitadores depois do nomeIdentificador da funcao.

    convenção de Letras para Parametros genericos:
    T == Tipo
    S == State/stado
    K == Key/chave
    V == Value/valor
    E == Element/elemento frontend

    // exemplo:
    <T extends unknown,>  // o param T inicia como desconhecido na configuração, e será conhecido no uso quando eu tipar sobreescrever este desconhecido default.
    `,
  },
]
