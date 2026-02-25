
export interface Colaborador {
  id_colaborador: number;
  nome: string;
}

export interface Supervisor {
  id_supervisor: number;
  nome: string;
}

export interface FormularioCadastroResponse {
  colaboradores: Colaborador[];
  supervisores: Supervisor[];
}