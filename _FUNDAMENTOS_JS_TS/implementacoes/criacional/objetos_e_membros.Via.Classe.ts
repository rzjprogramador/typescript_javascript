// deno-lint-ignore-file no-unused-vars
/*
-- Criação entidadeFabrica via CLASSE

-- missao ter objetoPrototipal: é fundamental ter um objetoPrototipal de fabrica para ter acesso ao prototipo de fabrica do js e add membros neste prototipoque é o DNA de Objetos da linguagem e nao add em cada objeto novo os membros, senão posso ter milhoes de metodos repetidos, mas fazendo no prototipal DNA tenho somente um emtodo para todos deste tipo de objeto sempre que dele for recriado instancias.
*/
type MembrosEntidade = {
  metodo1?: string
}

interface IProps extends MembrosEntidade {
  campo1: Readonly<string>,
  campo2: string,
  campoComputavelPorMembro?: MembrosEntidade["metodo1"]
  // para campos computaveis posso configurar campo especifico herdado pela interface.
}


// classe_factory

class FactoryEntidade {
  constructor(private readonly props: IProps) {
    // se precisar computar algum campo faço no bloco da fucnao construtora.
    this.props.campoComputavelPorMembro = this.metodo1()
  }

  metodo1() {
    return `${this.props.campo1}_concatenei_para_Mudar_retorno`
  }
}

const inputRequest = { campo1: 'valor Do campo1', campo2: 'bar' }

const makeFactoryEntidade = (input: IProps) => new FactoryEntidade(input)

const instance1 = makeFactoryEntidade(inputRequest)

console.log(instance1)
// console.log(instance1.metodo1())

/*
* Segurança das props da classe entidade :
-- console.log(instance1.props.campo1 = 'zoaaa')// ok: as props soa privadas nao posso mudar fora da construcao

*
*/

export default 1