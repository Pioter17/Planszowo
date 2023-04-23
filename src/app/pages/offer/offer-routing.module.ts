import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { OfferComponent } from './offer.component';

const routes: Routes = [
  {
    path: '',
    component: OfferComponent,
    children: [
      {
        path: ':filter',
        component: ItemListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
