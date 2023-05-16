import { importsUnique } from "../../helpers/unique/unique_imports_app.ts";
import { argsUserFactory } from "./args.user.factory.ts";
import { saveUser } from "./save.repository.user.ts";
import { ArgsUser, TypeUser } from "./user.contracts.ts";

const { importRegisters } = importsUnique;

const prepareUser = (u: ArgsUser): TypeUser => {
  const args = argsUserFactory(u);
  const model = { ...args, ...importRegisters.identifiers };
  const save = saveUser(model);
  return save;
};

export { prepareUser };
