import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatipicacionComponent } from './listatipicacion.component';

describe('ListatipicacionComponent', () => {
  let component: ListatipicacionComponent;
  let fixture: ComponentFixture<ListatipicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListatipicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatipicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
