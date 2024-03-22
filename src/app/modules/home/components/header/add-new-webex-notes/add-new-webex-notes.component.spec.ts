import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewWebexNotesComponent } from './add-new-webex-notes.component';

describe('AddNewWebexNotesComponent', () => {
  let component: AddNewWebexNotesComponent;
  let fixture: ComponentFixture<AddNewWebexNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewWebexNotesComponent]
    });
    fixture = TestBed.createComponent(AddNewWebexNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
