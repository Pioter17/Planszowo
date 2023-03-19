import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductForm } from '../../../../product.interface';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  emit: any;
  dialog : MatDialog;

  constructor(
    public dialogRef : MatDialogRef<ShowDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private productForm : ProductForm
  ){}

  ngOnInit(): void {

  }
}
