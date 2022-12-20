import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http";
import { Product } from "./product.model";
import { BEAUTY_API } from "../app.api";
import { Observable } from "rxjs";


@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }


    products(search?: string): Observable<Product[]> {
        let params: HttpParams = undefined
        if(search){
            params = new HttpParams().append('q', search)
        }
        return this.http.get<Product[]>(`${BEAUTY_API}/products`, {params: params})
    }

    showProduct(id?: "string"): Observable<Product[]> {
        return this.http.get<Product[]>(`${BEAUTY_API}/products/${id}`)
    }

}