import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebexNotesModalComponent } from './webex-notes-modal.component';

describe('WebexNotesModalComponent', () => {
  let component: WebexNotesModalComponent;
  let fixture: ComponentFixture<WebexNotesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebexNotesModalComponent]
    });
    fixture = TestBed.createComponent(WebexNotesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
