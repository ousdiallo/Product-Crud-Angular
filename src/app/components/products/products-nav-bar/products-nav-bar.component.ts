import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsType} from '../../../state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onGetAll() {
    this.productEventEmitter.emit({type: ProductActionsType.GET_ALL_PRODUCTS})
  }

  onGetSelected() {
    this.productEventEmitter.emit({type: ProductActionsType.GET_SELECTED_PRODUCTS})
  }

  onGetAvailable() {
    this.productEventEmitter.emit({type: ProductActionsType.GET_AVAILABLE_PRODUCTS})
  }

  onAddNew() {
    this.productEventEmitter.emit({type: ProductActionsType.NEW_PRODUCT})
  }

  onSearch(value: any) {
    this.productEventEmitter.emit({type: ProductActionsType.SEARCH_PRODUCTS, payload:value})
  }
}
