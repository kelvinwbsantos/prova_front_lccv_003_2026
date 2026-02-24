import { Routes } from '@angular/router';
import { ListagemAvaliacoes } from './pages/listagem-avaliacoes/listagem-avaliacoes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'avaliacoes',
        pathMatch: 'full',
    },
    {
        path: 'avaliacoes',
        title: 'Avaliações',
        component: ListagemAvaliacoes,
    },
    {
        path: '**',
        redirectTo: 'avaliacoes'
    }
];
