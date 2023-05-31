import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations:[
    HomeComponent
  ],
  imports:[
     HomeRoutingModule,
     MatButtonModule,
     MatDialogModule,
     MatIconModule
  ]
})

export class HomeModule { }
