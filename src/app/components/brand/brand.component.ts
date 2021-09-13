import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { AddBrandModalComponent } from '../add-brand-modal/add-brand-modal.component';
import { DelBrandModalComponent } from '../del-brand-modal/del-brand-modal.component';
import { UpdBrandModalComponent } from '../upd-brand-modal/upd-brand-modal.component';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];

  constructor(private brandService:BrandService, private modalService:NgbModal) { }

  ngOnInit(): void { 
    this.getAllBrands();
  }
  getAllBrands(): void{
    this.brandService.getAllBrands().subscribe((result : Brand[]) => {
      this.brands = result;
    });
  }

  addNew():void{
    const modalRef = this.modalService.open(AddBrandModalComponent);
    modalRef.componentInstance.saveBrand.subscribe((result: Brand) => {
      this.brandService.saveBrand(result).subscribe((brand:Brand) => {
       // console.log(brand);
        this.brands.push(brand);
      });
    })   
  }

  deleteBrand(brand:Brand):void{
    const modalRef = this.modalService.open(DelBrandModalComponent);
    modalRef.componentInstance.brand=brand;
    modalRef.componentInstance.deleteBrand.subscribe((result: boolean) =>{
      if (result){
        this.brandService.deleteBrand(brand.BrandID).subscribe((brand:Brand) =>{
          //console.log(brand);
          this.getAllBrands();
        })       
      
      } 
    });
    
  }

  updateBrand(brand:Brand):void{
    const modalRef = this.modalService.open(UpdBrandModalComponent);
    modalRef.componentInstance.brand=brand;
    modalRef.componentInstance.updateBrand.subscribe((result: Brand) =>{
     // if (result){
      //console.log(result);
        this.brandService.updateBrand(result).subscribe((brand:Brand) =>{
          //console.log(brand);
          this.getAllBrands();
        }) 
      //}
    }); 
  }    
}
