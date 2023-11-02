import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AramaPageComponent } from './arama-page.component';

describe('AramaPageComponent', () => {
  let component: AramaPageComponent;
  let fixture: ComponentFixture<AramaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AramaPageComponent]
    });
    fixture = TestBed.createComponent(AramaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
