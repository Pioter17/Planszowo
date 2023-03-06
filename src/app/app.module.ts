import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { CardComponent } from './card/card.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { AddToBasketComponent } from './add-to-basket/add-to-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    ItemListComponent,
    ItemComponent,
    CardComponent,
    ItemDetailsComponent,
    ShowDetailsComponent,
    AddToBasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
