export interface StatusAvaliacao {
  id: number;
  descricao: string; // "Criado", "Em elaboração", "Em avaliação", "Concluida"
}

export interface AvaliacaoListagem {
  id_avaliacao: number;
  nome_colaborador: string;
  competencia: string; // Formato "MM/YYYY"
  status: StatusAvaliacao;
}