import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameUnicoDialogComponent } from './exame-unico-dialog.component';

describe('ExameUnicoDialogComponent', () => {
  let component: ExameUnicoDialogComponent;
  let fixture: ComponentFixture<ExameUnicoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExameUnicoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExameUnicoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
