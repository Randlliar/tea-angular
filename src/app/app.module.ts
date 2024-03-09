import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/pages/main/main.component';
import {HeaderComponent} from './components/common/header/header.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {CatalogComponent} from './components/pages/catalog/catalog.component';
import {CatalogService} from "./services/catalog.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {TeaCardComponent} from './components/common/tea-card/tea-card.component';
import {TeaDetailsComponent} from './components/pages/tea-details/tea-details.component';
import {CreateOrderComponent} from './components/pages/create-order/create-order.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PhoneValidatorDirective } from './directives/phone-validator.directive';
import { OnlyLettersValidatorDirective } from './directives/only-letters-validator.directive';
import { AddressValidatorDirective } from './directives/address-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    TeaCardComponent,
    TeaDetailsComponent,
    CreateOrderComponent,
    PhoneValidatorDirective,
    OnlyLettersValidatorDirective,
    AddressValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CatalogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
