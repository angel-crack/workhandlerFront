import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsPageComponent } from './options-page.component';

describe('OptionsPageComponent', () => {
  let component: OptionsPageComponent;
  let fixture: ComponentFixture<OptionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsPageComponent]
    });
    fixture = TestBed.createComponent(OptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
