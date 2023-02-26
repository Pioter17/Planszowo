import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OfferComponent } from './main-tabs/offer/offer.component';
import { BasketComponent } from './main-tabs/basket/basket.component';
import { ContactComponent } from './main-tabs/contact/contact.component';
import { HomeComponent } from './main-tabs/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'contact', component: ContactComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,
                                  OfferComponent,
                                  BasketComponent,
                                  ContactComponent,
                                  PageNotFoundComponent];
