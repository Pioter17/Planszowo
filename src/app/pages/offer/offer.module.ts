import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '@pages/offer/components/item/item.component';
import { ItemListComponent } from '@pages/offer/components/item-list/item-list.component';
import { CardComponent } from '@pages/offer/components/card/card.component';
import { FiltersFormComponent } from '@pages/offer/components/filters-form/filters-form.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OfferRoutingModule } from '@pages/offer/offer-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OfferComponent } from '@pages/offer/offer.component';
import { ApiManagerService } from '@pages/offer/api-management.service';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OfferComponent,
    ItemComponent,
    ItemListComponent,
    CardComponent,
    FiltersFormComponent
  ],
  imports: [
    OfferRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatSliderModule
  ],
  providers: [
    ApiManagerService
  ]
})
export class OfferModule { }
