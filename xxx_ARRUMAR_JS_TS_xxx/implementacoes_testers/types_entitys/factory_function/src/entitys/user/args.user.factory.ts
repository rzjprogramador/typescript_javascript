import { ArgsUser } from "./user.contracts.ts";
import { protoUser } from "./proto.user.ts";

const argsUserFactory = (u: ArgsUser): ArgsUser => {
  const user = Object.create(protoUser);
  user.primeiroNome = u.primeiroNome;
  user.sobrenome = u.sobrenome;
  user.idade = u.idade;

  return user;
};

export { argsUserFactory };
