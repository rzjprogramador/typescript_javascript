// deno-lint-ignore-file no-explicit-any

import { validateNumber } from "../../utils_validates/number_validate.ts";

export class Idade {
  public readonly idade: number;

  constructor(idade: number) {
    this.idade = idade;
    Object.freeze(this);
  }

  static create(idade: number): Idade | any {
    if (!validateNumber(idade)) {
      return "ops.. fail no objectValue idade";
    }
    return new Idade(idade);
  }
}
