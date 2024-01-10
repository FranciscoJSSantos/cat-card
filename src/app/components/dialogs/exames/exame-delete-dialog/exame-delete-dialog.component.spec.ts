import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameDeleteDialogComponent } from './exame-delete-dialog.component';

describe('ExameDeleteDialogComponent', () => {
  let component: ExameDeleteDialogComponent;
  let fixture: ComponentFixture<ExameDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExameDeleteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExameDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
