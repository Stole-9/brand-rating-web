import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandRatingComponent } from './components/brand-rating/brand-rating.component';
import { BrandComponent } from './components/brand/brand.component';

const routes: Routes = [
  { path: '',
    component: BrandComponent 
  },
  {
    path: "rating",
    component: BrandRatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
