import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Product, ProductForm } from '../../../../product.interface';
import { Dialog } from '@angular/cdk/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  @Input() product : Product;

  emit: any;
  dialog : MatDialog;

  constructor(
    public dialogRef : MatDialogRef<ItemDetailsComponent>,
    //@Inject(MAT_DIALOG_DATA) private productForm : ProductForm
  ){}

  ngOnInit(): void {
    console.log(this.product)
  }

  addToBasket(){

  }
}
