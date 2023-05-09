import { Idade } from "./../object_values/idade/idade.ts";
import { Nome } from "./../object_values/nome/nome.ts";
// deno-lint-ignore-file no-explicit-any

interface Entity1Model {
  nome: string;
  idade: number;
}

interface Entity1Args {
  nome: string;
  idade: number;
}

interface InvalidParam {
  message: string;
  erro: string;
}

export class Entity1 {
  public readonly nome!: Nome;
  public readonly idade!: Idade;

  constructor(
    nome: Nome,
    idade: Idade,
  ) {
    this.nome = nome;
    this.idade = idade;
  }

  static create(entity1Args: Entity1Args): Entity1Model | any {
    const nome = Nome.create(entity1Args.nome);
    const idade = Idade.create(entity1Args.idade);

    if (!nome) {
      return "devolver InvalidParam nome na classe Entity1";
    }
    if (!idade) {
      return "devolver InvalidParam idade na classe Entity1";
    }

    const newObject = new Entity1(nome, idade);
    return {
      nome: newObject.nome.nome,
      idade: newObject.idade.idade,
    };
  }
}
