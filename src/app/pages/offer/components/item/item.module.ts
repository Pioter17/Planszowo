import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddToBasketComponent } from '@pages/offer/components/add-to-basket/add-to-basket.component';
import { ItemDetailsComponent } from '@pages/offer/components/item-details/item-details.component';

@NgModule({
  declarations: [
    ItemDetailsComponent,
    AddToBasketComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class ItemModule { }
