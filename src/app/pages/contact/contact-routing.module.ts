import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { PageNotFoundComponent } from "@pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ContactRoutingModule { }
