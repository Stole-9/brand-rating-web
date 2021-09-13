import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-del-brand-modal',
  templateUrl: './del-brand-modal.component.html',
  styleUrls: ['./del-brand-modal.component.css']
})
export class DelBrandModalComponent implements OnInit {
  @Input() public brand:Brand={BrandID:0, BrandName:'', BrandDescription:''};
  @Output() deleteBrand: EventEmitter<Boolean> = new EventEmitter();
  brandForm: FormGroup = new FormGroup({
    brandName: new FormControl(''),
    brandDescription: new FormControl('')
   });

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
    this.brandForm = new FormGroup({
      brandName: new FormControl(this.brand.BrandName),
      brandDescription: new FormControl(this.brand.BrandDescription)
     });
  }

  delete() {
    this.deleteBrand.emit(true);
    this.activeModal.close();
  }

}
