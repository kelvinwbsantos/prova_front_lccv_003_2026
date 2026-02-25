import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvaliacoesService } from '../../services/avaliacoes.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CompetenciaFormatPipe } from '../../shared/pipes/competencia-format.pipe';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detalhes-avaliacao',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule, ReactiveFormsModule, CompetenciaFormatPipe],
  templateUrl: './detalhes-avaliacao.html',
  styleUrl: './detalhes-avaliacao.scss',
})
export class DetalhesAvaliacao implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private avaliacoesService = inject(AvaliacoesService);
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  id = Number(this.route.snapshot.paramMap.get('id'));
  modoEdicao = false;

  avaliacao: any = null;

  form = this.fb.group({
    sugestao_supervisor: [''],
    observacao_avaliado: [''],
  });

  ngOnInit(): void {
    this.avaliacoesService.visualizar(this.id).subscribe(data => {
      this.avaliacao = data;
      this.form.patchValue({
        sugestao_supervisor: data.sugestao_supervisor,
        observacao_avaliado: data.observacao_avaliado,
      });

      this.modoEdicao = [2, 3].includes(data.status.id);
      if (!this.modoEdicao) this.form.disable();
    });
  }

  voltar() {
    this.router.navigate(['/avaliacoes']);
  }

  get podeSalvar(): boolean {
    return this.modoEdicao && this.form.dirty;
  }

  salvar() {
    this.avaliacoesService.editar(this.id, this.form.value).subscribe({
      next: () => {
        this.snackBar.open('Avaliação salva!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/avaliacoes']);
      },
      error: () => {
        this.snackBar.open('Avaliação salva!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/avaliacoes']);
      },
    });
  }
}
