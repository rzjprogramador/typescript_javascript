import { ConceitoExemplo } from "./../../utils/contracts/conceitos.ts";
import { StaticsObjects } from "../../utils/statics/statics.objects.ts";

interface ObjetosArgs {
  nome: string;
  extrair_membros: ConceitoExemplo;
  removendo_campos_para_nao_serem_copiados: ConceitoExemplo;
  adicionando_novos_campos_para_a_copia: ConceitoExemplo;
  pesquisando_no_objeto: ConceitoExemplo;
  retornar_todas_chaves: ConceitoExemplo;
  retornar_todos_valores: ConceitoExemplo;
  descobrir_tamanho: ConceitoExemplo;
}

export class Objetos {
  constructor(private readonly args: ObjetosArgs) {
    this.args.extrair_membros.conceito = StaticsObjects.desestruturacao;
  }
}
