import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { BasketRoutingModule } from "./basket-routing.module";
import { BasketComponent } from "./basket.component";
import { BasketItemComponent } from "./components/basket-item/basket-item.component";
import { MatIconModule } from "@angular/material/icon";
import { OrderFormDialogComponent } from './components/order-form-dialog/order-form-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations:[
    BasketComponent,
    BasketItemComponent,
    OrderFormDialogComponent
  ],
  imports:[
    BasketRoutingModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class BasketModule { }
