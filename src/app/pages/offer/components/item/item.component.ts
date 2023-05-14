import { Component, Input, Output, OnDestroy, EventEmitter } from '@angular/core';
import { Product, ProductForm } from '../../../../product.interface';
import { MatDialog } from '@angular/material/dialog';
import { AddToBasketComponent } from '../add-to-basket/add-to-basket.component';
import { filter, takeUntil, Subject } from 'rxjs';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { BasketService } from '@pages/basket.service';

@Component({
  selector: 'pw-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() pwProduct : Product;
  @Output() pwShowDetails = new EventEmitter<ProductForm>();
  @Output() pwAddToBasket = new EventEmitter<ProductForm>();

  OnDestroy$ = new Subject<void>();

  constructor(
    public dialog : MatDialog,
    private basket : BasketService
  ){ }

  ngOnDestroy(): void {
    this.OnDestroy$.next();
    this.OnDestroy$.complete();
  }

  showDetails(){
   const dialogRef = this.dialog.open(ItemDetailsComponent, {
    width: '900px',
    height: '600px',
    data: this.pwProduct
   });

   dialogRef.afterClosed().pipe(
    filter((res) => !!res),
    takeUntil(this.OnDestroy$)
   ).subscribe(() => this.pwShowDetails.emit(this.pwProduct));
  }

  addToBasket(){
    this.basket.addToBasket(this.pwProduct.name, this.pwProduct.price)
  }
}
