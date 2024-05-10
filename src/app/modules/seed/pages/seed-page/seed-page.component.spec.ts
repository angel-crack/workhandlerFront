import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedPageComponent } from './seed-page.component';

describe('SeedPageComponent', () => {
  let component: SeedPageComponent;
  let fixture: ComponentFixture<SeedPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeedPageComponent]
    });
    fixture = TestBed.createComponent(SeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
