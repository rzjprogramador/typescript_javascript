// deno-lint-ignore-file no-inferrable-types

export class StaticsObjects {
  static desestruturacao: string = `
  /* Desestruturacao ***************************************************
  traducao: extracao
  conceito: desestruturacao é extrair membros e recuperar em variaveisInventadas,
  onde_pode_usar: a desestruturacao pode ser usada em todo lugar que tenha referencia para um objeto|array, ex: em copias de objeto, em param de funcoes, dentro de funcoes, classes, etc..ou seja onde tiver usando objeto.
  usabilidade: copia ou extrair valores selecionados de um objeto e adicionar em outras variaveis_novas.
  extraindo do objeto suas props - obs: dentro de { o que vai ser extraido } = fonte
  dica: quando os nomes das variaveis sao iguais coloque a primeira dentro de {} para extrair e elimine a segunda ex: de :: const endereco = user.endereco  para const { endereco } = user
  */
`;
}
