import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameEditingDialogComponent } from './exame-editing-dialog.component';

describe('ExameEditingDialogComponent', () => {
  let component: ExameEditingDialogComponent;
  let fixture: ComponentFixture<ExameEditingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExameEditingDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExameEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
