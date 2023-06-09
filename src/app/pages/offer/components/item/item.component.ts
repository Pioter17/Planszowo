import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasketService } from '@pages/basket.service';
import { Subject, filter, takeUntil } from 'rxjs';
import { Product } from '../../../../product.interface';
import { ItemDetailsComponent } from '@pages/offer/components/item-details/item-details.component';

@Component({
  selector: 'pw-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() pwProduct : Product;
  @Output() pwShowDetails = new EventEmitter<Product>();

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
    data: this.pwProduct,
    maxHeight: '90vh',
    maxWidth: '98vw'
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
