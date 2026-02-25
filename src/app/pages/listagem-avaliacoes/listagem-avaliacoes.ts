import { Component, inject, OnInit } from '@angular/core';
import { AvaliacoesService } from '../../services/avaliacoes.service';
import { AvaliacaoListagem } from '../../models/avaliacoes';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CompetenciaFormatPipe } from '../../shared/pipes/competencia-format.pipe';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AdicionarAvaliacao } from './components/adicionar-avaliacao/adicionar-avaliacao';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-avaliacoes',
  imports: [MatIconModule, MatTableModule, MatButtonModule, AsyncPipe, MatDialogModule, MatCardModule, CompetenciaFormatPipe, MatTooltipModule, MatSnackBarModule],
  templateUrl: './listagem-avaliacoes.html',
  styleUrl: './listagem-avaliacoes.scss',
})
export class ListagemAvaliacoes implements OnInit {
  private readonly avaliacoesService = inject(AvaliacoesService);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private router = inject(Router);


  dataSource$: Observable<AvaliacaoListagem[]> | undefined;
  displayedColumns: string[] = ['id', 'colaborador', 'competencia', 'status', 'acoes'];

  ngOnInit(): void {
    this.dataSource$ = this.avaliacoesService.listar();
  }

  visualizar(id: number) {
    this.router.navigate(['/avaliacoes', id, 'visualizar']);
  }

  editar(id: number) {
    this.router.navigate(['/avaliacoes', id, 'editar']);
  }

  iniciar(id: number) {
    this.avaliacoesService.iniciar(id).subscribe({
      next: () => {
        this.snackBar.open('Avaliação iniciada!', 'Fechar', { duration: 3000 });
        this.dataSource$ = this.avaliacoesService.listar();
      },
      error: () => this.snackBar.open('Erro ao iniciar avaliação!', 'Fechar', { duration: 3000 }),
    });
  }

  darFeedback(id: number) {
    this.avaliacoesService.darFeedback(id).subscribe({
      next: () => {
        this.snackBar.open('Feedback enviado!', 'Fechar', { duration: 3000 });
        this.dataSource$ = this.avaliacoesService.listar();
      },
      error: () => this.snackBar.open('Erro ao dar feedback!', 'Fechar', { duration: 3000 }),
    });
  }

  concluir(id: number) {
    this.avaliacoesService.concluir(id).subscribe({
      next: () => {
        this.snackBar.open('Avaliação concluída!', 'Fechar', { duration: 3000 });
        this.dataSource$ = this.avaliacoesService.listar();
      },
      error: () => this.snackBar.open('Erro ao concluir avaliação!', 'Fechar', { duration: 3000 }),
    });
  }

  adicionarAvaliacao() {
    this.dialog.open(AdicionarAvaliacao);
  }

}
