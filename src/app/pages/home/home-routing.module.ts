import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { PageNotFoundComponent } from "@pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class HomeRoutingModule { }