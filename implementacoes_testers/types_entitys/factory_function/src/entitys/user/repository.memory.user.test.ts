// deno-lint-ignore-file no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { ArgsUser } from "./user.contracts.ts";
import { prepareUser } from "./prepare.user.ts";
import { repositoryMemoryUser } from "./repository.memory.user.ts";
import { importsUnique } from "../../helpers/unique/unique_imports_app.ts";
import { objArgsUser } from "../../helpers/object_use/user/args.entity.user.ts";

const { ConsoleTest } = importsUnique;

type InputPrepareUserTest = ArgsUser;

const sut = repositoryMemoryUser;
const sutPrepare = function (i: InputPrepareUserTest) {
  return prepareUser(i);
};

const sutInputPrepare1 = objArgsUser.user1;
const sutInputPrepare2 = objArgsUser.user2;

Deno.test("[ repositoryMemoryUser] deve salvar os items no repo memory", () => {
  const where1 = sutPrepare(sutInputPrepare1);
  const where2 = sutPrepare(sutInputPrepare2);

  const items = sut?._items;
  const resultSutlength = items?.length;

  // ConsoleTest("OBJ USER CRIADO >>> ", where1);
  // ConsoleTest("ITEMS REPO MEMORY USER >>> ", items);

  expect(resultSutlength).toEqual(2);
});
