// deno-lint-ignore-file no-explicit-any

export type LogType = (...d: any[]) => void;
export type LogTestType = (...d: any[]) => void;

export const Log: LogType = (...d) => console.log(d);
// export const ConsoleApp = (d: any): void => console.log("Test >>>>: ", d);
// ConsoleApp -- para evitar console.log na app

export const LogTest: LogTestType = (...d) => console.log(d);
// export const ConsoleTest = (d: any): void => console.log("Test >>>>: ", d);
// ConsoleTest -- para evitar console.log em varios tests

// SUBIR PARA RZJ_MODULES_GIT
