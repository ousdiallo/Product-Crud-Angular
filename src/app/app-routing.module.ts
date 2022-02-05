import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';


const routes: Routes = [
  {path: "products", component:ProductsComponent},
  {path: "add-product", component:ProductAddComponent},
  {path: "edit-product/:id",component:ProductEditComponent},
  {path: "", component:HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
