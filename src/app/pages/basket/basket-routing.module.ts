import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasketComponent } from "./basket.component";
import { PageNotFoundComponent } from "@pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: BasketComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class BasketRoutingModule { }
