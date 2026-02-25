import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvaliacaoListagem } from '../models/avaliacoes';
import { HttpClient } from '@angular/common/http';
import { FormularioCadastroResponse } from '../models/formulario-cadastro-response';

@Injectable({
  providedIn: 'root',
})
export class AvaliacoesService {
  private http = inject(HttpClient);
  url = 'https://sume.lccv.ufal.br/api/public/selecao_sume/avaliacoes_desempenho';

  listar(): Observable<AvaliacaoListagem[]> {
    return this.http.get<AvaliacaoListagem[]>(`${this.url}/listar/`);
  }

  listar_colaborador_supervisor(): Observable<FormularioCadastroResponse> {
    return this.http.get<FormularioCadastroResponse>(`${this.url}/cadastrar_avaliacao_form/`);
  }

  cadastrar(dados: any): Observable<any> {
    return this.http.post(`${this.url}/cadastrar/`, dados);
  }

  visualizar(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}/visualizar/`);
  }

  editar(id: number, dados: any): Observable<any> {
    return this.http.post(`${this.url}/${id}/editar/`, dados);
  }

  iniciar(id: number): Observable<any> {
    return this.http.post(`${this.url}/${id}/iniciar/`, {});
  }

  darFeedback(id: number): Observable<any> {
    return this.http.post(`${this.url}/${id}/dar_feedback/`, {});
  }

  concluir(id: number): Observable<any> {
    return this.http.post(`${this.url}/${id}/concluir/`, {});
  }
}
