import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedioDeleteDialogComponent } from './remedio-delete-dialog.component';

describe('RemedioDeleteDialogComponent', () => {
  let component: RemedioDeleteDialogComponent;
  let fixture: ComponentFixture<RemedioDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemedioDeleteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemedioDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
