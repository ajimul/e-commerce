import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CategoryDetails, Client, MyCard, ProductDTO } from '../interfaces/share-interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  //Authenticate api
  public  logInn(clientId: number): Observable<Client> {
    const url = `${this.apiServerUrl}/${clientId}clients`;
    return this.http.get<Client>(url);
  }
  // product and category api
  public getProducts(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(`${this.apiServerUrl}products`);
  }

  public getCategoryDetails(productId: number): Observable<CategoryDetails[]> {
    return this.http.get<CategoryDetails[]>(`${this.apiServerUrl}category/${productId}`);
  }

  public getAllCategoryDetails(): Observable<CategoryDetails[]> {
    return this.http.get<CategoryDetails[]>(`${this.apiServerUrl}category`);
  }

  // API for MyCard api
   setMyCards(mycard:MyCard): Observable<MyCard> {
    return this.http.post<MyCard>(`${this.apiServerUrl}mycards`, mycard);
  }


  getMyCardsByClientRefId(clientRefId: number): Observable<MyCard[]> {
    return this.http.get<MyCard[]>(`${this.apiServerUrl}mycards/byClientRefId/${1}`);
  }


  //card checkout
  checkOutMyCards(clientId: number): Observable<CategoryDetails[]> {
    return this.http.get<CategoryDetails[]>(`${this.apiServerUrl}checkout/myCards/${clientId}`);
  }
  deleteMyCard(cardId:number,clientId: number):Observable<any>{
    return  this.http.delete<any>(`${this.apiServerUrl}checkout/myCards/${cardId}/${clientId}`)

  }
}
