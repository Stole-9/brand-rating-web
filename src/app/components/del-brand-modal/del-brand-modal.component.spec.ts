import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelBrandModalComponent } from './del-brand-modal.component';

describe('DelBrandModalComponent', () => {
  let component: DelBrandModalComponent;
  let fixture: ComponentFixture<DelBrandModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelBrandModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelBrandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
