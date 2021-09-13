import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrandRatingComponent } from './components/brand-rating/brand-rating.component';
import { BrandService } from './services/brand.service';
import { HttpClientModule } from '@angular/common/http';
import { AddBrandModalComponent } from './components/add-brand-modal/add-brand-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DelBrandModalComponent } from './components/del-brand-modal/del-brand-modal.component';
import { UpdBrandModalComponent } from './components/upd-brand-modal/upd-brand-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    BrandRatingComponent,
    AddBrandModalComponent,
    DelBrandModalComponent,
    UpdBrandModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
