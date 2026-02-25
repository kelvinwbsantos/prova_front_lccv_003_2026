import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesAvaliacao } from './detalhes-avaliacao';

describe('DetalhesAvaliacao', () => {
  let component: DetalhesAvaliacao;
  let fixture: ComponentFixture<DetalhesAvaliacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesAvaliacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesAvaliacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
