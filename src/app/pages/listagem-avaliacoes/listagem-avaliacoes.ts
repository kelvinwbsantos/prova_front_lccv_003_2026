import { Component, inject, OnInit } from '@angular/core';
import { AvaliacoesService } from '../../services/avaliacoes.service';
import { AvaliacaoListagem } from '../../models/avaliacoes';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { CompetenciaFormatPipe } from '../../shared/pipes/competencia-format.pipe';

@Component({
  selector: 'app-listagem-avaliacoes',
  imports: [MatIconModule, MatTableModule, MatButtonModule, AsyncPipe, MatDivider, MatCardModule, CompetenciaFormatPipe],
  templateUrl: './listagem-avaliacoes.html',
  styleUrl: './listagem-avaliacoes.scss',
})
export class ListagemAvaliacoes implements OnInit {
  private readonly avaliacoesService = inject(AvaliacoesService);


  dataSource$: Observable<AvaliacaoListagem[]> | undefined;
  displayedColumns: string[] = ['id', 'colaborador', 'competencia', 'status', 'acoes'];

  ngOnInit(): void {
    this.dataSource$ = this.avaliacoesService.listar();
  }

  iniciar(id: number) {

  }

  visualizar(id: number) {

  }

}
