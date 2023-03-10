import { Component, Input, Output, OnDestroy } from '@angular/core';
import { Product } from '../product.interface';
import { MatDialog } from '@angular/material/dialog';
import { ShowDetailsComponent } from '../show-details/show-details.component';
import { AddToBasketComponent } from '../add-to-basket/add-to-basket.component';
import { filter, takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'pw-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnDestroy{
  @Input() pwProduct : Product;
  @Output() pwShowDetails : ShowDetailsComponent;
  @Output() pwAddToBasket : AddToBasketComponent;

  OnDestroy$ = new Subject<void>();

  constructor(private dialog : MatDialog){ }

  ngOnDestroy(): void {
    this.OnDestroy$.next();
    this.OnDestroy$.complete();
  }

  showDetails(){
   const dialogRef = this.dialog.open(ShowDetailsComponent, {
    width: '400px'
   });

   dialogRef.afterClosed().pipe(
    filter((res) => !!res),
    takeUntil(this.OnDestroy$)
   ).subscribe(() => this.pwShowDetails.emit(this.pwProduct));
  }

  addToBasket(){

  }
}
