import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedioEditingDialogComponent } from './remedio-editing-dialog.component';

describe('RemedioEditingDialogComponent', () => {
  let component: RemedioEditingDialogComponent;
  let fixture: ComponentFixture<RemedioEditingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemedioEditingDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemedioEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
