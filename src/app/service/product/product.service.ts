import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  base_url: string;
  constructor(private http: HttpClient) {
    this.base_url = "http://localhost:8080/api";
  }

  getAllProducts(): Observable<Product[]> {
    const url = this.base_url+"/product";
    return this.http.get<Product[]>(url);
  }

  getByTitle(query: string): Observable<Product[]> {
    const url = this.base_url+"/product/getByTitle/"+query;
    return this.http.get<Product[]>(url);
  }
}
