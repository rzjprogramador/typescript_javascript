// deno-lint-ignore-file no-unused-vars no-explicit-any

// Construtores/Tipos Personalizados

interface E1Args {
  primeiroNome: string;
  sobrenome: string;
  idade: number;
}

function E1(this: E1Args, args: E1Args) {
  this.primeiroNome = args.primeiroNome;
  this.sobrenome = args.sobrenome;
  this.idade = args.idade;
}

// add membros metodos no proto do construtor criado:
E1.prototype.nomeCompleto = function nomeCompleto() {
  return `${this.primeiroNome} ${this.sobrenome}`;
};

E1.prototype.comment = function comment() {
  return `${this.primeiroNome} fez um comentario...`;
};

E1.metodoEstaticoUppereHanderline = function metodoEstaticoUppereHanderline(
  texto: string,
) {
  return texto
    .toUpperCase()
    .replaceAll(" ", "_");
};

const e1 = new (E1 as any)({
  primeiroNome: "reinaldo",
  sobrenome: "zacharias",
  idade: 45,
});
console.log(e1);

const e2 = new (E1 as any)({
  primeiroNome: "gustavo",
  sobrenome: "eduardo",
  idade: 12,
});

/* *************************************************** */

// membros Staticos do construtor

console.log("acessa membros atrelados do construtor", E1.prototype);
console.log(
  "acessando metodoEstatico via Construtor",
  E1.metodoEstaticoUppereHanderline("frase1 frase2 frase3 "),
);

console.dir(E1); // console.dir mostra os membros do Construtor estaticos e proto

/* *************************************************** */

// membros de Prototype das Instancias.
console.log(e1, e2);
console.log(e1.nomeCompleto());
console.log(
  "se instancias apontam para o mesmo metodo no proto",
  e1.nomeCompleto === e2.nomeCompleto,
); // true

console.log(e1.comment(), e2.comment());
console.log("descobrir nome do construtor da instancia", e1.constructor.name);

/* *************************************************** */

/*

em_typescript:

funcaoConstrutora: "antes dos args tem que declarar o this e seu constutorEmuso ex: `(this: E1Args, args: E1Args)` ",

instanciamentoObjeto: "dizer que o Contrutor é qualquer um ex: `new (E1 as any)({
  c1: "valor", c2: "valor",} );`"



*/
