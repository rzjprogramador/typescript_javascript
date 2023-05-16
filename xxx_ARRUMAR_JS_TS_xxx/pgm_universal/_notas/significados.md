---
marp: true
---

# ARRUMAR
.....
TODO
no pgm cpp
- mudar comandos para intrucoes.
- verificar na CLI tamanho binario: du -lhs BINARIO

PGM

SIGNIFICADOS

atribuicao:
  atribuicaoCopia: "instanciamento , copia de valor que usa usa sinal de igual =",

  atribuicaoRealSemCopia: "instanciamento, vi ser, ",

iterador: variavelParametro sobre iteraveis que incorpora/recebe/retorna o valor do item a cada rodagem do loop.

comando: expressao, sentenca, operacao entre operandos, fazer algo,

magicos : literal, marretado, mock, mockado, dado que imita o real, forcado, chumbado, dado estatico.

bind: combinar, match, merge, chaveEFechadura, combinacaoPerfeita, binding
.....

atribuicaoNormal: voce faz uma copia do valor,
atribuicaoPonteiro: voce usa sempre o valor real...nao é copia, é link pro valor real.

parametro: sao as variaveis/objeto vazios a serem usados na funcao , e quem vai preencher seus valores argumentando é quem vai utilizar a funcao, argumentando assim pra preecher do seu modo e seguindo as regras definidas nestas variaveisArgs.

quem_pode_usar: utilizadoresComValor: quem tem valor pra dar, uma funcaoQueRetornaValor, um literaMarretado, o ClientHttp, uma variavelPreenchida quem tiver valor e cumpra a regra do param.
...
"funcoesDeTerceiros/Exportadas/Libs 99% vem de objeto que instanciamos e herdamos seus membros "agora sou ele"...1% vem como funcao ai ao importar inserimos em um variaelObjeto com 'as' variavel e usamos."

TODO
colocar linha source no bashrc para se auto propagar.
....

app Cine net vpn:
https://play.google.com/store/apps/details?id=aplicativo.play.net29

atribuir | instanciar | apelidar | copiar | inicializar | contruir

executar_dar_um_clique:
  viaConsole: é mostrar onde esta o arquivo,, './'  pontoBarra é onde estou,  ex: ./ARQUIVO.extensao

....
...

diretiva : palavra-chave para importacoes, exportações, regras, regrasDeEscritaSobreescrita,

regra_de_escrita_vars:
  conceito: só coloque o valor no recipiente se ele for de acordo com a regra de escrita demarcada. exemplo numa constante só coloque valor que nao vai mudar..ex: o valor de pi, sexo, nome, cpf, cabem numa constante.

prioridades: expressoes dentro de () tem a prioridade de ser executada primeiro.
ordens_de_procedencia: (), *, /, +, -, %

incremento_e_decremento:
  por_uma_unidade_um: numero++ ,  numero-- // vai acrescentar ou diminuir 1 a cada execucao.
  porilimitadas%unidades: num +=1 || num-=1 || num+=20 || num*=30 // a var recebe o valor atual dela mais o que for passado.

cursos_udemy promocoes sao LOGADO de Terça a Sexta-feira.

=====
Significados

objetoFuncao: == modulos, libs,

======
C++

convencao_nomes_preferida:
variaveis: handerline
funcao_metodo: camelCass
estrutura_tipo:  SnackCase

modularizacao_namespace:
  conceito: importar acessar modulosMetodosInternos.
  semelhanca: "objeto",
  importando: :nao precisa mais de namespace nome",
  usar: "nameSapce:: // nomeDoNameSpace:: 2 pojtos",

prototipo:
beneficio: alem de contrato com regra, nao deixa buraco vazio no binario compilado.
 ordem logica pra quem for usa-lo
1- o contrato
2- a implementacao.

conversao:
preferencia conversao funcional faca do tipo uma funcao receba o alvo a ser convertido e recupere o resultado
ex: int(a), string(a), bool(a) conferir se todos dao certo.

ver tipo da variavel: typeid(alvo)

----
Loop
for cada param separado por ;

sintaxe:
for (
inicioValor varItem;
rodaAteEstaVerdade;
mudancaDaVarInicioACadaRodagem;
 )  faca enquantoRodar {}

=====
LINUX
pipeline_grep: "é o giltrar pelo que vc passar depois do |",

listar_fonts : fc-list grep | nerd // vai filtrar por fonts nerd , onde for usar copie e coloque barra antes de cada espaço.
---

---

---