import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { AvaliacoesService } from '../../../../services/avaliacoes.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adicionar-avaliacao',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatDialogModule, ReactiveFormsModule, MatSnackBarModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './adicionar-avaliacao.html',
  styleUrl: './adicionar-avaliacao.scss',
})
export class AdicionarAvaliacao {
  private avaliacoesService = inject(AvaliacoesService);
  private dialogRef = inject(MatDialogRef<AdicionarAvaliacao>);
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  private dados = toSignal(
    this.avaliacoesService.listar_colaborador_supervisor()
  );

  colaboradores = computed(() => this.dados()?.colaboradores ?? []);
  supervisores = computed(() => this.dados()?.supervisores ?? []);

  fechar() {
    this.dialogRef.close();
  }

  form = this.fb.group({
    colaborador: [null, Validators.required],
    supervisor: [null, Validators.required],
    competencia: [null, Validators.required],
  });

  cadastrar() {
    if (this.form.invalid) return;

    const payload = {
      id_colaborador: this.form.value.colaborador,
      id_supervisor: this.form.value.supervisor,
      competencia: formatDate(this.form.value.competencia!, 'yyyy-MM-dd', 'pt-BR'),
    };

    this.avaliacoesService.cadastrar(payload).subscribe({
      next: () => {
        this.snackBar.open('Avaliação cadastrada com sucesso!', 'Fechar', { duration: 3000 });
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.snackBar.open('Erro ao cadastrar avaliação!', 'Fechar', { duration: 3000 });
        console.error(err);
      },
    });
  }

}
