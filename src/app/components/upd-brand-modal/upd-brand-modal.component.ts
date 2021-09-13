import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-upd-brand-modal',
  templateUrl: './upd-brand-modal.component.html',
  styleUrls: ['./upd-brand-modal.component.css']
})
export class UpdBrandModalComponent implements OnInit {
  @Input() public brand:Brand={BrandID:0, BrandName:'', BrandDescription:''};
  @Output() updateBrand: EventEmitter<Brand> = new EventEmitter();
  brandForm: FormGroup = new FormGroup({
    brandID : new FormControl(''),
    brandName: new FormControl(''),
    brandDescription: new FormControl('')
   });
  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
    this.brandForm = new FormGroup({
      brandID : new FormControl(this.brand.BrandID),
      brandName: new FormControl(this.brand.BrandName),
      brandDescription: new FormControl(this.brand.BrandDescription)
     });
  }

  update() {
    this.updateBrand.emit({BrandID: this.BrandID.value,BrandName: this.BrandName.value, BrandDescription: this.BrandDescription.value} as Brand);
    this.activeModal.close();
  }

  get BrandDescription(): FormControl {
    return this.brandForm.get('brandDescription') as FormControl;
  }

  get BrandName(): FormControl {
    return this.brandForm.get('brandName') as FormControl;
  }

  get BrandID(): FormControl {
    return this.brandForm.get('brandID') as FormControl;
  }

}
