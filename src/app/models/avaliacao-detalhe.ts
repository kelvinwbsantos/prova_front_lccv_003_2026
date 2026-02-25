export interface AvaliacaoDetalhe {
  id_avaliacao: number;
  id_colaborador: number;
  nome_colaborador: string;
  id_supervisor: number;
  nome_supervisor: string;
  competencia: string;
  status: {
    id: number;
    descricao: string;
  };
  nota: number;
  sugestao_supervisor: string;
  observacao_avaliado: string;
}