import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'competenciaFormat',
  standalone: true
})
export class CompetenciaFormatPipe implements PipeTransform {

  private readonly MESES: { [key: string]: string } = {
    '01': 'Jan',
    '02': 'Fev',
    '03': 'Mar',
    '04': 'Abr',
    '05': 'Mai',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Ago',
    '09': 'Set',
    '10': 'Out',
    '11': 'Nov',
    '12': 'Dez'
  };

  transform(value: string | undefined | null): string {
    if (!value) return '';

    const partes = value.split('/');
    if (partes.length !== 2) return value;

    const mes = partes[0];
    const ano = partes[1];

    const mesExtenso = this.MESES[mes] || mes;

    return `${mesExtenso}./${ano}`;
  }
}