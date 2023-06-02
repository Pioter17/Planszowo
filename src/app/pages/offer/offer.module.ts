import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from '@pages/offer/components/card/card.component';
import { FiltersFormComponent } from '@pages/offer/components/filters-form/filters-form.component';
import { ItemListComponent } from '@pages/offer/components/item-list/item-list.component';
import { ItemComponent } from '@pages/offer/components/item/item.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { ApiManagerService } from '@pages/offer/api-management.service';
import { OfferRoutingModule } from '@pages/offer/offer-routing.module';
import { OfferComponent } from '@pages/offer/offer.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

@NgModule({
  declarations: [
    OfferComponent,
    ItemComponent,
    ItemListComponent,
    CardComponent,
    FiltersFormComponent,
    ItemDetailsComponent
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
    MatSliderModule,
    MatRadioModule
  ],
  providers: [
    ApiManagerService
  ]
})
export class OfferModule { }
