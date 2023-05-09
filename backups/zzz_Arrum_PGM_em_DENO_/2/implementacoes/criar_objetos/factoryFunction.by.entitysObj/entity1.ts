// deno-lint-ignore-file no-unused-vars

interface E1Args {
  c1: string;
  c2: string;
}

// factoryFunction : criacao de objetoEntidade
const E1 = ({ c1, c2 }: E1Args) => {
  //
  const e1 = Object.create(objeto_Com_Metodos_Proto);

  e1.c1 = c1;
  e1.c2 = c2;

  return e1;
};

// objeto_Com_Metodos_Proto

const objeto_Com_Metodos_Proto = {
  metodo1(this: E1Args): string {
    return `Ola metodoproto1 de E1-- nomeCompleto > ${this.c1} ${this.c2}`;
  },

  metodo2(this: E1Args): string {
    return `Ola metodoproto2 de E1-- nomeCompleto > ${this.c1} ${this.c2}`;
  },
};

// instancias

// criar instancia de factoryFunction nao preciso do new
const instancia1 = E1({ c1: "rei", c2: "zachars" });
const instancia2 = E1({ c1: "guga", c2: "eduardo" });

// uso:
console.log(instancia1, instancia2);
console.log(instancia1.metodo1());
console.log(instancia1.metodo2());
console.log(instancia2.metodo1());
console.log(instancia2.metodo2());

/*
factoryFunction : criacao de objetoEntidade

- tudo é feita na instancia criada a mesma instancia injetada metodoProto, é atribuida com os args, e retornada.

-  associa_objeto_metodoProto_nas_instancias  >> Object.create( objeto_Com_Metodos_Proto );

- importante typescript, sempre que precisar tipar o this, faça nos params do metodo, mesmo que o emtodo nao receba params , tipe o this nele ex: (this: Tipo)

- uso_metodoProto: nao precisa invocar o nome do objetoDemetodosProto somente a `instancia.metodo()` nele inserido.


*/
