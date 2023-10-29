import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFirstSectionComponent } from './header-first-section.component';

describe('HeaderFirstSectionComponent', () => {
  let component: HeaderFirstSectionComponent;
  let fixture: ComponentFixture<HeaderFirstSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderFirstSectionComponent]
    });
    fixture = TestBed.createComponent(HeaderFirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
