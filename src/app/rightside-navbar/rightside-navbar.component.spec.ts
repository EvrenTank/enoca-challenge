import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsideNavbarComponent } from './rightside-navbar.component';

describe('RightsideNavbarComponent', () => {
  let component: RightsideNavbarComponent;
  let fixture: ComponentFixture<RightsideNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightsideNavbarComponent]
    });
    fixture = TestBed.createComponent(RightsideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
