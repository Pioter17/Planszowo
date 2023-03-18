import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from 'src/app/item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CardComponent } from 'src/app/card/card.component';


import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OfferComponent } from './offer.component';



@NgModule({
  declarations: [
    OfferComponent,
    ItemComponent,
    ItemListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class OfferModule { }
