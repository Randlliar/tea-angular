import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "../types/card";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) {
  }

  getTeas(): Observable<Card[]> {
    return this.http.get<Card[]>('https://testologia.site/tea');
  }
  getTea(id: number): Observable<Card> {
    return this.http.get<Card>(`https://testologia.site/tea?id=${id}`);
  }

  createOrder(data: {
    name: string,
    last_name: string,
    phone: string,
    country: string,
    zip: string,
    product: string,
    address: string,
    comment: string
  }) {
    return this.http.post<{success: boolean, message?: string}>(`https://testologia.site/order-tea`, data);
  }

}
