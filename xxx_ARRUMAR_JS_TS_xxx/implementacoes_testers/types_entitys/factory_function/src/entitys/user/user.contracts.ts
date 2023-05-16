import { IdentifiersType } from "../../helpers/modules_rzj_enviar_github/registers.ts";

type TypeUser = ArgsUser & IdentifiersType;

interface ArgsUser extends UserProto {
  primeiroNome: string;
  sobrenome: string;
  idade: number;
}

interface UserProto {
  nomeCompleto?: () => string;
  fazerAniversario?: () => boolean;
}

export type { ArgsUser, TypeUser, UserProto };
