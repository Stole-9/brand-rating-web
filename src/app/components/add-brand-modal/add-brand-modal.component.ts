import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-add-brand-modal',
  templateUrl: './add-brand-modal.component.html',
  styleUrls: ['./add-brand-modal.component.css']
})
export class AddBrandModalComponent implements OnInit {

  @Output() saveBrand: EventEmitter<Brand> = new EventEmitter();
   brandForm: FormGroup = new FormGroup({
     brandName: new FormControl(''),
     brandDescription: new FormControl('')
    });
  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
    // this.form = this.fb.group({
    //   brandName:[''],
    //   brandDescription:['']
    // });
  }

  save() {
    this.saveBrand.emit({BrandName: this.BrandName.value, BrandDescription: this.BrandDescription.value} as Brand);
    this.activeModal.close();
  }

  get BrandDescription(): FormControl {
    return this.brandForm.get('brandDescription') as FormControl;
  }

  get BrandName(): FormControl {
    return this.brandForm.get('brandName') as FormControl;
  }

}
