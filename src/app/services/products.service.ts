import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../model/product.model";

@Injectable({providedIn:"root"})
export class ProductsService{

    host = environment.host;     
    
    constructor(private http: HttpClient) {
        
    }

    getAll() : Observable<Product[]>{
        return this.http.get<Product[]>(this.host+"/products")
    }

    getSelected() : Observable<Product[]>{
        return this.http.get<Product[]>(this.host+"/products?selected=true")
    }
    getAvailable() : Observable<Product[]>{
        return this.http.get<Product[]>(this.host+"/products?available=true")
    }
    search(keyword: string) : Observable<Product[]>{
        return this.http.get<Product[]>(this.host+"/products?name_like="+keyword)
    }

    select(product: Product): Observable<Product>{
        product.selected = !product.selected;
        return this.http.put<Product>(this.host+"/products/"+product.id, product)
    }

    delete(product: Product): Observable<void>{
        return this.http.delete<void>(this.host+"/products/"+product.id)
    }

}