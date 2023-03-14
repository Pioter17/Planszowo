import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './main-tabs/page-not-found/page-not-found.component';
import { OfferComponent } from './offer.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {
    path: 'offer',
    component: OfferComponent,
    children: [
      {path: ':filter', component: ItemListComponent},
    ]
  },
  {path: 'basket', component: BasketComponent},
  {path: 'contact', component: ContactComponent},
  {path: "offer/**", component: PageNotFoundComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [HomeComponent,
                                  OfferComponent,
                                  BasketComponent,
                                  ContactComponent,
                                  PageNotFoundComponent,
                                  ItemListComponent];
