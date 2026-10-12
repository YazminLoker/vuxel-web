import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPersonalizada } from './web-personalizada';

describe('WebPersonalizada', () => {
  let component: WebPersonalizada;
  let fixture: ComponentFixture<WebPersonalizada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPersonalizada],
    }).compileComponents();

    fixture = TestBed.createComponent(WebPersonalizada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
