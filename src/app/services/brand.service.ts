import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Brand } from '../models/brand';
import { environment } from 'src/environments/environment';
import {catchError} from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) {  }

  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${environment.apiEndpoint}/api/brands`).pipe(catchError((error: any) => throwError(error)));
  }

  saveBrand(brand: Brand):Observable<Brand> {
    return this.http.post<Brand>(`${environment.apiEndpoint}/api/brand`, brand).pipe(catchError((error: any) => throwError(error))); 
  }

  deleteBrand(brandID: number):Observable<any> {
    return this.http.delete(`${environment.apiEndpoint}/api/brand/${brandID}`).pipe(catchError((error: any) => throwError(error))); 
  }

  updateBrand(brand: Brand):Observable<any> {
    return this.http.put(`${environment.apiEndpoint}/api/brand/${brand.BrandID}`,brand).pipe(catchError((error: any) => throwError(error))); 
  }
}
