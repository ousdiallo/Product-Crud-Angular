import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../model/product.model';
import {ActionEvent, ProductActionsType} from '../../../../state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:Product;
  @Output() eventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.eventEmitter.emit({type:ProductActionsType.SELECT_PRODUCT, payload:product})
  }

  onUpdate(product: Product) {
    this.eventEmitter.emit({type:ProductActionsType.EDIT_PRODUCT,payload:product})
  }

  onDelete(product: Product) {
    this.eventEmitter.emit({type:ProductActionsType.DELETE_PRODUCT,payload:product})
  }
}
