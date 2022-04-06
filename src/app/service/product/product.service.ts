import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProductAddDetails } from 'src/app/models/Basic';
import { Bids } from 'src/app/models/Bids';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  base_url: string;
  constructor(private http: HttpClient) {
    this.base_url = "http://localhost:8080/api";
  }

  getAllProducts(): Observable<HttpResponse<{products: Product[]}>> {
    const url = this.base_url+"/product";
    return this.http.get<{products: Product[]}>(url, {observe: "response"});
  }

  getProductById(pid: string): Observable<Product> {
    const url = this.base_url+"/product/"+pid;
    return this.http.get<Product>(url, {withCredentials: true});
  }

  getByTitle(query: string): Observable<HttpResponse<Product[]>> {
    const url = this.base_url+"/product/getByTitle/"+query;
    return this.http.get<Product[]>(url,{observe: "response", withCredentials: true});
  }

  getByMaxPrice(query: string): Observable<HttpResponse<Product[]>> {
    const url = this.base_url+"/product/getByMaxPrice/"+query;
    return this.http.get<Product[]>(url,{observe: "response", withCredentials: true});
  }

  getById(query: string): Observable<HttpResponse<Product[]>> {
    const url = this.base_url+"/product/getById/"+query;
    return this.http.get<Product[]>(url,{observe: "response", withCredentials: true});
  }

  addProduct(data: ProductAddDetails){
    const url = this.base_url+"/addProduct";
    return this.http.post(url, data, {withCredentials: true});
  }

  getByTitleAndId(query: string, uid: number): Observable<Product[]> {
    const url = this.base_url+"/product/getByTitleAndUid/"+query+"/"+uid;
    // console.log(url);
    return this.http.get<Product[]>(url, {withCredentials: true});
  }

  deleteProduct(pid: number, uid: number): Observable<Product>{
    const url = this.base_url+"/deleteProduct";
    return this.http.delete<Product>(url, {body:{pid: pid, uid: uid}, withCredentials: true});
  }

  editProduct(data: Product){
    const url = this.base_url+"/updateProduct/"+data.pid;
    return this.http.put(url, data, {withCredentials: true});
  }

  bidOnProduct(pid: string, uid: number, amount: number, product_name: string){
    const url = this.base_url+"/bid/"+pid;
    return this.http.post(url, {uid: uid, amount: amount, product_name: product_name}, {withCredentials: true});
  }

  fetchAllBidsByPid(pid: string): Observable<Bids[]>{
    const url = this.base_url+"/getBid/"+pid;
    return this.http.get<Bids[]>(url, {withCredentials: true});
  }

  fetchAllBidsByUid(uid: number): Observable<Bids[]>{
    const url = this.base_url+"/getBidByUid/"+uid;
    return this.http.get<Bids[]>(url, {withCredentials: true});
  }

  closeBid(pid: string, uid: number){
    const url = this.base_url+"/product/productBidStatus/"+pid;
    return this.http.put(url, {uid: uid, bid_status: "Close", sold_status: "Sold"}, {withCredentials: true});
  }

  fetchProductsBySoldTo(uid: string): Observable<Product[]>{
    const url = this.base_url+"/product/getBySoldTo/"+uid;
    return this.http.get<Product[]>(url, {withCredentials: true});
  }

}
