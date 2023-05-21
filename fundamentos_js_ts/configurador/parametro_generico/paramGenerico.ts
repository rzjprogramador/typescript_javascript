// Um Parametro Generico em ts

type Param1 = string;

const funcaoNome = <F extends Param1>(data: F) => data;

console.log(funcaoNome("foo"));

// tutorial: https://stackoverflow.com/questions/62233382/how-do-i-define-and-call-a-generic-function-parameter-in-typescript
