import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAvaliacoes } from './listagem-avaliacoes';

describe('ListagemAvaliacoes', () => {
  let component: ListagemAvaliacoes;
  let fixture: ComponentFixture<ListagemAvaliacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemAvaliacoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemAvaliacoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
