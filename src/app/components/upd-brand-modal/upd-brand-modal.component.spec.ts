import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdBrandModalComponent } from './upd-brand-modal.component';

describe('UpdBrandModalComponent', () => {
  let component: UpdBrandModalComponent;
  let fixture: ComponentFixture<UpdBrandModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdBrandModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdBrandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
