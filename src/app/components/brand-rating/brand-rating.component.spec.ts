import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandRatingComponent } from './brand-rating.component';

describe('BrandRatingComponent', () => {
  let component: BrandRatingComponent;
  let fixture: ComponentFixture<BrandRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
