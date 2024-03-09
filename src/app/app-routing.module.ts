import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {CatalogComponent} from "./components/pages/catalog/catalog.component";
import {TeaDetailsComponent} from "./components/pages/tea-details/tea-details.component";
import {CreateOrderComponent} from "./components/pages/create-order/create-order.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/:id', component: TeaDetailsComponent},
  {path: 'order', component: CreateOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
