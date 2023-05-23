import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { BasketRoutingModule } from "./basket-routing.module";
import { BasketComponent } from "./basket.component";
import { BasketItemComponent } from "./components/basket-item/basket-item.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations:[
    BasketComponent,
    BasketItemComponent
  ],
  imports:[
     BasketRoutingModule,
     CommonModule,
     MatButtonModule,
     MatIconModule
  ]
})

export class BasketModule { }
