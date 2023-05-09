// deno-lint-ignore-file no-explicit-any

import { validateString } from "../../utils_validates/string_validate.ts";

export class Nome {
  public readonly nome: string;
  // todo no tutorial esta private - mas nao extrai este campo no obj final assim...

  constructor(nome: string) {
    this.nome = nome;
    Object.freeze(this);
  }

  static create(nome: string): Nome | any {
    if (!validateString(nome)) {
      return "ops.. fail no objectValue nome";
    }
    return new Nome(nome);
  }
}
