import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productFormGroup: FormGroup;
  submitted: boolean = false;
  productId:number;

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private  fb:FormBuilder, private productService:ProductsService) {
    this.productId = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productService.getOne(this.productId).subscribe(product=>{
      this.productFormGroup = this.fb.group({
        id: [product.id, Validators.required],
        name: [product.name, Validators.required],
        price: [product.price, Validators.required],
        quantity: [product.quantity, Validators.required],
        selected: [product.selected, Validators.required],
        available: [product.available, Validators.required]
      })
    });
  }

  onUpdate() {
    this.submitted = true;
    if (this.productFormGroup.invalid) return;
    this.productService.update(this.productFormGroup.value).subscribe(data =>{
      alert("Product updated successfully........")
    })
    this.router.navigateByUrl("/products")
  }
}
