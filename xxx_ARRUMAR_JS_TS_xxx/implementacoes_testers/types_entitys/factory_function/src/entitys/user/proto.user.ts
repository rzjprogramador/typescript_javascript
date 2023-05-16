// deno-lint-ignore-file no-unused-vars ban-unused-ignore

import { ArgsUser, UserProto } from "./user.contracts.ts";

const protoUser: UserProto = {
  nomeCompleto(this: ArgsUser): string {
    return `${this.primeiroNome} ${this.sobrenome}`;
  },

  fazerAniversario(this: ArgsUser): boolean {
    this.idade += 1;
    return true;
  },
};

export { protoUser };
