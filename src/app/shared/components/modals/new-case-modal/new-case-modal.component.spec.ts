import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCaseModalComponent } from './new-case-modal.component';

describe('NewCaseModalComponent', () => {
  let component: NewCaseModalComponent;
  let fixture: ComponentFixture<NewCaseModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCaseModalComponent]
    });
    fixture = TestBed.createComponent(NewCaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
