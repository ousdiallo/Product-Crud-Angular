import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { AppDataState, DataState } from 'src/app/state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsData$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataState=DataState;

  constructor(private productService: ProductsService, private router:Router) { }

  ngOnInit(): void {
  }

  onGetAll() {
    this.productsData$ = this.productService.getAll().pipe(
      map((data) => ({ dataState: DataState.LOADED, data: data })),
      startWith({ dataState: DataState.LOADING }),
      catchError(err => of({ dataState: DataState.ERROR, errorMessage: err.message }))
    );
  }

  onGetSelected() {
    this.productsData$ = this.productService.getSelected().pipe(
      map((data) => ({ dataState: DataState.LOADED, data: data })),
      startWith({ dataState: DataState.LOADING }),
      catchError(err => of({ dataState: DataState.ERROR, errorMessage: err.message }))
    );
  }

  onGetAvailable() {
    this.productsData$ = this.productService.getAvailable().pipe(
      map((data) => ({ dataState: DataState.LOADED, data: data })),
      startWith({ dataState: DataState.LOADING }),
      catchError(err => of({ dataState: DataState.ERROR, errorMessage: err.message }))
    );
  }

  onSearch(dataForm:any) {
    this.productsData$ = this.productService.search(dataForm.keyword).pipe(
      map((data) => ({ dataState: DataState.LOADED, data: data })),
      startWith({ dataState: DataState.LOADING }),
      catchError(err => of({ dataState: DataState.ERROR, errorMessage: err.message }))
    );
  }

  onSelect(p: Product) {
    this.productService.select(p).subscribe(data => {
      p.selected = data.selected
    })
  }
  onDelete(p: Product) {
    let v = confirm("Etes-vous sûr de supprimer ce produit ?")
    if(v==true)
      this.productService.delete(p).subscribe(data => {
      this.onGetAll();
    })
  }

  onAddNew() {
    this.router.navigateByUrl("/add-product")
  }

  onUpdate(p) {
    this.router.navigateByUrl("/edit-product/"+p.id);
  }
}
