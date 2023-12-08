import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CategoryDetails, ProductDTO } from '../interfaces/share-interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) { }
  
    public getProducts(): Observable<ProductDTO[]> {
      return this.http.get <ProductDTO[]>(`${this.apiServerUrl}products`);
    }
    public getCategoryDetails(productId:number):Observable<CategoryDetails[]>{
      return this.http.get<CategoryDetails[]>(`${this.apiServerUrl}category/${productId}`);
    }
    public getAllCategoryDetails():Observable<CategoryDetails[]>{
      return this.http.get<CategoryDetails[]>(`${this.apiServerUrl}category`);
    }
  }
  