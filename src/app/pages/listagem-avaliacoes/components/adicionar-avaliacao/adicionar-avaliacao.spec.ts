import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAvaliacao } from './adicionar-avaliacao';

describe('AdicionarAvaliacao', () => {
  let component: AdicionarAvaliacao;
  let fixture: ComponentFixture<AdicionarAvaliacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarAvaliacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarAvaliacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
