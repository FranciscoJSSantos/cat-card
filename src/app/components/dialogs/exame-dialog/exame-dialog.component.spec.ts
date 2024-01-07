import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameDialogComponent } from './exame-dialog.component';

describe('ExameDialogComponent', () => {
  let component: ExameDialogComponent;
  let fixture: ComponentFixture<ExameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExameDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
