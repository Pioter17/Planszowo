import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { HomeComponent } from '@pages/home/home.component';
import { BasketComponent } from '@pages/basket/basket.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: "full"
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'offer',
    loadChildren: ()=> import('@pages/offer/offer.module').then(m => m.OfferModule),
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [HomeComponent,
                                  BasketComponent,
                                  ContactComponent,
                                  PageNotFoundComponent];
