import { NgModule } from "@angular/core";
import { BasketRoutingModule } from "./basket-routing.module";
import { BasketComponent } from "./basket.component";
import { CommonModule } from "@angular/common";
import { BasketItemComponent } from "./components/basket-item/basket-item.component";

@NgModule({
  declarations:[
    BasketComponent,
    BasketItemComponent
  ],
  imports:[
     BasketRoutingModule,
     CommonModule
  ]
})

export class BasketModule { }
