import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { LoginComponent } from './security/login/login.component';
import { LoggedInGuard } from "./security/loggedin.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "login/:to", component: LoginComponent },
  {
    path: "restaurants/:id", component: RestaurantDetailComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuComponent },
      { path: "reviews", component: ReviewsComponent }
    ]
  },
  { path: "restaurants", component: RestaurantsComponent },
  {
    path: "order",
    loadChildren: () => import("./order/order.module").then(order => order.OrderModule),
    canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]
  },
  { path: "order-summary", component: OrderSummaryComponent },
  { path: "about", loadChildren: () => import("./about/about.module").then(about => about.AboutModule) },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
