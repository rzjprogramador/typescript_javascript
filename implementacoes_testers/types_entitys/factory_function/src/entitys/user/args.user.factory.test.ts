// deno-lint-ignore-file no-prototype-builtins
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { ArgsUser } from "./user.contracts.ts";
import { argsUserFactory } from "./args.user.factory.ts";
import { protoUser } from "./proto.user.ts";
import { importsUnique } from "../../helpers/unique/unique_imports_app.ts";
import { objArgsUser } from "../../helpers/object_use/user/args.entity.user.ts";

type InputArgsUserTest = ArgsUser;

const { ConsoleTest } = importsUnique;

const sut = function (i: InputArgsUserTest) {
  return argsUserFactory(i);
};

const sutInput = objArgsUser;
const proto = protoUser;

Deno.test("[argsUserFactory] deve retornar os args enviados para user", () => {
  const actual = sut(sutInput.user1);
  expect(actual).toEqual(sutInput.user1);
});

Deno.test("[argsUserFactory] deve deve conter estas propriedades", () => {
  const action = sut(sutInput.user1);

  const actual = action.primeiroNome;
  const expected = "reinaldo";

  expect(action).toHaveProperty("primeiroNome");
  expect(actual).toEqual(expected);
});

Deno.test("[argsUserFactory] devem conter e ser compativeis os {prototypes} das instancias criadas", () => {
  const action1 = sut(sutInput.user1);
  const action2 = sut(sutInput.user2);

  const isPrototypes = proto.isPrototypeOf(action1) &&
    proto.isPrototypeOf(action2);
  const isUniquePathMemory =
    action1.fazerAniversario === action2.fazerAniversario;
  const result = true;

  expect(isPrototypes).toEqual(result);
  expect(isUniquePathMemory).toEqual(result);

  ConsoleTest("test: ", isPrototypes);
  // ConsoleTest("test: ",
  //   action1.fazerAniversario === action2.fazerAniversario,
  // );
});
