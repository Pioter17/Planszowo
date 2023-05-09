import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../../product.interface';
import { BasketService } from '@pages/basket.service';

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
    console.log(this.product)
  }

  addToBasket(){
    this.basket.addToBasket(this.product.name, this.product.price)
  }
}
