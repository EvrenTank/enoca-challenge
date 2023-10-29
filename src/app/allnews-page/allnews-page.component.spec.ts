import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllnewsPageComponent } from './allnews-page.component';

describe('AllnewsPageComponent', () => {
  let component: AllnewsPageComponent;
  let fixture: ComponentFixture<AllnewsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllnewsPageComponent]
    });
    fixture = TestBed.createComponent(AllnewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
