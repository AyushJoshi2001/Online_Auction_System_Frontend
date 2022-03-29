import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProductAddDetails } from 'src/app/models/Basic';
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

  getProductById(pid: string): Observable<Product> {
    const url = this.base_url+"/product/"+pid;
    return this.http.get<Product>(url);
  }

  getByTitle(query: string): Observable<Product[]> {
    const url = this.base_url+"/product/getByTitle/"+query;
    return this.http.get<Product[]>(url);
  }

  addProduct(data: ProductAddDetails){
    const url = this.base_url+"/addProduct";
    return this.http.post(url, data);
  }

  getByTitleAndId(query: string, uid: number): Observable<Product[]> {
    const url = this.base_url+"/product/getByTitleAndUid/"+query+"/"+uid;
    // console.log(url);
    return this.http.get<Product[]>(url);
  }

  deleteProduct(pid: number, uid: number): Observable<Product>{
    const url = this.base_url+"/deleteProduct";
    return this.http.delete<Product>(url, {body:{pid: pid, uid: uid}});
  }

  editProduct(data: Product){
    const url = this.base_url+"/updateProduct/"+data.pid;
    return this.http.put(url, data);
  }

  bidOnProduct(pid: string, uid: number, amount: number){
    const url = this.base_url+"/bid/"+pid;
    return this.http.post(url, {uid: uid, amount: amount});
  }

}
