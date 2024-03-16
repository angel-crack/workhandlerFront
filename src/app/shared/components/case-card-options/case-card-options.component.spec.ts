import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCardOptionsComponent } from './case-card-options.component';

describe('CaseCardOptionsComponent', () => {
  let component: CaseCardOptionsComponent;
  let fixture: ComponentFixture<CaseCardOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseCardOptionsComponent]
    });
    fixture = TestBed.createComponent(CaseCardOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
