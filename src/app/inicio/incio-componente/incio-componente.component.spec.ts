import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncioComponenteComponent } from './incio-componente.component';

describe('IncioComponenteComponent', () => {
  let component: IncioComponenteComponent;
  let fixture: ComponentFixture<IncioComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncioComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncioComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
