import { Routes } from '@angular/router';
import { ListagemAvaliacoes } from './pages/listagem-avaliacoes/listagem-avaliacoes';
import { DetalhesAvaliacao } from './pages/detalhes-avaliacao/detalhes-avaliacao';

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
    { path: 'avaliacoes/:id/visualizar', component: DetalhesAvaliacao },
    { path: 'avaliacoes/:id/editar', component: DetalhesAvaliacao },
    {
        path: '**',
        redirectTo: 'avaliacoes'
    },
];
