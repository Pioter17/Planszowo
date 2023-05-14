import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BasketService } from '@pages/basket.service';
import { Product } from '../../../../product.interface';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {

  emit: any;
  dialog : MatDialog;

  constructor(
    public dialogRef : MatDialogRef<ItemDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public product : Product,
    private basket : BasketService
  ){}

  ngOnInit(): void {
  }

  addToBasket(){
    this.basket.addToBasket(this.product.name, this.product.price)
  }
}
