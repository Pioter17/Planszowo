import { NgModule } from "@angular/core";
import { BasketRoutingModule } from "./basket-routing.module";
import { BasketComponent } from "./basket.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    BasketComponent
  ],
  imports:[
     BasketRoutingModule,
     CommonModule
  ]
})

export class BasketModule { }
