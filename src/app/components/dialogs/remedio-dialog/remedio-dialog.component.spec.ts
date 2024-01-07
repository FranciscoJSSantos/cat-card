import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedioDialogComponent } from './remedio-dialog.component';

describe('RemedioDialogComponent', () => {
  let component: RemedioDialogComponent;
  let fixture: ComponentFixture<RemedioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemedioDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemedioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
