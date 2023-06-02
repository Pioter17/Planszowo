import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: "full"
  },
  {
    path: 'home',
    loadChildren: ()=> import('@pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'offer',
    loadChildren: ()=> import('@pages/offer/offer.module').then(m => m.OfferModule),
  },
  {
    path: 'basket',
    loadChildren: ()=> import('@pages/basket/basket.module').then(m => m.BasketModule),
  },
  {
    path: 'contact',
    loadChildren: ()=> import('@pages/contact/contact.module').then(m => m.ContactModule),
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
