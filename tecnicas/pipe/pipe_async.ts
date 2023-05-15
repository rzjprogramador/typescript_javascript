// deno-lint-ignore-file no-explicit-any ban-types prefer-const
// ts: PIPE COM ARG ASYNC PROMESSA QUE DORME ANTE DE DAR VALOR

// tecnica: fazer uma Promessa que executa uma funcionalidade dentro de um setTimeout

// Funcionalidade_Para_Demora_De_Um_Artefato: artefato que nova promessa , que tambem devolve funcao e opcao de escolha de tempo de espera

// Tipos_Utilizados
type ArgMain = Promise<number>;
type RespMain = Promise<number>;
type ConstruPipeMain = Function;

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Input_Simulando_Demora :
// tecnica : executadora da func de tempo e depois algum valor : 1° dorme, depois devolve valor
const timeSleep = 2000;

const input = async (): ArgMain => {
  await sleep(timeSleep);
  return 20;
};

// Componentes_Em_Funcoes_Para_O_Pipe

const fnComponent1 = async (a: ArgMain): RespMain => await a + 10;
const fnComponent2 = async (a: ArgMain): RespMain => await a - 5;

const listFnComponent1: Function[] = [fnComponent1, fnComponent2];

// tecnica pipe reduce : como cada fn componente do pipe ja resolve a promessa, nao precisa resolver no pipe.

const pipe = async (
  a: ArgMain,
  list: ConstruPipeMain[] = listFnComponent1,
): RespMain => {
  return await list.reduce(
    async (acc: RespMain, fns: ConstruPipeMain) => {
      let resAcc: number = await acc;
      return fns(resAcc);
    },
    a,
  );
};

// Visualizar Resultado : ao pipe argumentar o input e decidir como mostrar

pipe(input())
  .then((r) => console.log(r));
