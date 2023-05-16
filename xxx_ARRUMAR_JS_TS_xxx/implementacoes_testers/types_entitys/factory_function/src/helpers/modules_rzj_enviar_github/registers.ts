interface ImportRegistersType {
  identifiers: IdentifiersType;
  dates: DatesType;
}

type IdentifiersType = {
  ID: string;
  IDB: string;
};

type DatesType = {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

// Objetos Internos
const identifiersMod: IdentifiersType = {
  ID: Date.now().toString(),
  IDB: Date.now().toString(),
};

const datesMod: DatesType = {
  createdAt: Date.now().toString(),
  updatedAt: Date.now().toString(),
  deletedAt: Date.now().toString(),
};

// Objetos uso no App
const importRegisters: ImportRegistersType = {
  identifiers: identifiersMod,
  dates: datesMod,
};

export { importRegisters };
export type { ImportRegistersType, IdentifiersType };
