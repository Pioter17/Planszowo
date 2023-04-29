import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddToBasketComponent } from '../add-to-basket/add-to-basket.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';


@NgModule({
  declarations: [
    ItemDetailsComponent,
    AddToBasketComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class ItemModule { }
