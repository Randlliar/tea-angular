import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {TeaDetailsComponent} from "./tea-details/tea-details.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {CreateOrderComponent} from "./create-order/create-order.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalog/:id', component: TeaDetailsComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'order', component: CreateOrderComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
