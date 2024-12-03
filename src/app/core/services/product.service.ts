
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product, Results } from '../../shared/models/product';
import { KinguinApiUrl,kinguinApiKey,crossOverUrl } from '../../../environments/variables';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiInHeader: { headers: HttpHeaders; };

  constructor(public hc:HttpClient) {
    this.apiInHeader = {
      headers: new HttpHeaders({
        'X-Api-Key': kinguinApiKey
      })
    }
  }

  getProduct(params:string){
    return this.hc.get<Product>(crossOverUrl + KinguinApiUrl + params,this.apiInHeader);
  }
  getProducts(params:string){
    return this.hc.get<Results>(crossOverUrl + KinguinApiUrl + params,this.apiInHeader);
  }

  searchProduct(param:string){
    return this.hc.get<Results>(crossOverUrl + KinguinApiUrl + param,this.apiInHeader);
  }
}
