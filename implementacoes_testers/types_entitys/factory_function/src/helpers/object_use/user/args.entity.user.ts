import { ArgsUser } from "../../../entitys/user/user.contracts.ts";

type ObjArgsUser = {
  user1: ArgsUser;
  user2: ArgsUser;
};

const objArgsUser: ObjArgsUser = {
  user1: {
    primeiroNome: "reinaldo",
    sobrenome: "zachars jr",
    idade: 45,
  },
  user2: {
    primeiroNome: "u2",
    sobrenome: "fooSobrenome jr",
    idade: 99,
  },
};

export { objArgsUser };
