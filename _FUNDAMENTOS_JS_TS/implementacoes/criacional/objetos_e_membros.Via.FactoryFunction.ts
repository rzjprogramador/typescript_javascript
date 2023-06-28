// deno-lint-ignore-file no-unused-vars
/*
-- Criação entidadeFabrica via tecnica FactoryFunction

-- missao ter objetoPrototipal: é fundamental ter um objetoPrototipal de fabrica para ter acesso ao prototipo de fabrica do js e add membros neste prototipoque é o DNA de Objetos da linguagem e nao add em cada objeto novo os membros, senão posso ter milhoes de metodos repetidos, mas fazendo no prototipal DNA tenho somente um emtodo para todos deste tipo de objeto sempre que dele for recriado instancias.
*/

type IFoo = { campo1: string, campo2: string, campoComputavelPorMembro?: string }

// membros da factory
const membersFoo1: any = {
  metodo1(this: IFoo) {
    return `${this.campo1}_concatenei_para_Mudar_retorno`
  },
};

// factory


const prefactoryClienteFisico = (a: IFoo) => {
  const entity = Object.create(membersFoo1);
  const merge = Object.assign(entity, a);
  // apos criar o objetoPrototipal , mudarei 1 campo
  merge.campoComputavelPorMembro = merge.metodo1()
  return merge;
};

const instance1 = prefactoryClienteFisico({ campo1: 'foo', campo2: 'bar' })
console.log(instance1)
console.log(instance1.metodo1())

/*
significados passos logicos usados na funcao de criacao factory
-- Object.create(membersFoo1); >>> cria o objeto com toda herança prototipal de Object do javascript.

-- Object.assign(entity, a); >>> atribui ao objeto prototipal criado tudoq ue vier nos argumentos, para nao precisar abrir e atribuir cada argumento que vier em forma d eobjeto..faz tudo empacotado.

observação: tudo isto pode ser feito em class de forma mais facil e legivel.
*/

export default 1