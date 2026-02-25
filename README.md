# Prova prática de front-end

> Edital Nº 003/2026 | LCCV/UFAL

---

## Sobre o projeto

Interface web para gerenciamento do ciclo de avaliações de desempenho de colaboradores, desenvolvida como parte da seleção de bolsista do Laboratório de Computação Científica e Visualização da UFAL.

A aplicação consome uma API REST e permite cadastrar, visualizar, editar e acompanhar o status de cada avaliação ao longo de seu ciclo de vida.

---

## Stack

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)

![Angular Material](https://img.shields.io/badge/%20-Angular%20Material-blue?style=for-the-badge&logo=angular)

![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

---

## Como executar

```bash
# Clone o repositório
git clone https://github.com/kelvinwbsantos/prova_front_lccv_003_2026.git

# Entre na pasta
cd prova_front_lccv_003_2026

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
```

Acesse em `http://localhost:4200`

---

## Funcionalidades

- ✅ Listagem de avaliações com status e ações dinâmicas
- ✅ Cadastro de avaliação com seleção de colaborador, supervisor e competência (data)
- ✅ Visualização de avaliação
- ✅ Edição de sugestões e observações
- ✅ Transições de status via ações: Iniciar, Dar Feedback e Concluir
- ✅ Feedback visual com snackbar em todas as ações


---

## Estrutura

```
src/app/
├── models/                   # Interfaces TypeScript
├── services/                 # Integração com a API
├── shared/pipes/             # Pipes reutilizáveis
└── pages/
    ├── listagem-avaliacoes/  # Página principal + modal de cadastro
    └── detalhes-avaliacao/   # Página de visualização e edição
```