import {
  IdentifiersType,
  importRegisters,
  ImportRegistersType,
} from "../modules_rzj_enviar_github/registers.ts";
import {
  LogTest,
  LogTestType,
} from "./../../helpers/modules_rzj_enviar_github/modules_rzj_enviar_github.ts";

interface ImportsUnique {
  ConsoleTest: LogTestType;
  importRegisters: ImportRegistersType;
}

const importsUnique: ImportsUnique = {
  ConsoleTest: LogTest,
  importRegisters: importRegisters,
};

export { importsUnique };
export type { IdentifiersType, ImportRegistersType };
