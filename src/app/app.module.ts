import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CatalogService} from "./shared/services/catalog.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MainComponent} from "./views/home/main/main.component";
import {HeaderComponent} from "./shared/components/common/header/header.component";
import {FooterComponent} from "./shared/components/common/footer/footer.component";
import {CatalogComponent} from "./views/home/catalog/catalog.component";
import {TeaCardComponent} from "./shared/components/common/tea-card/tea-card.component";
import {TeaDetailsComponent} from "./views/home/tea-details/tea-details.component";
import {CreateOrderComponent} from "./views/home/create-order/create-order.component";
import {PhoneValidatorDirective} from "./shared/directives/phone-validator.directive";
import {OnlyLettersValidatorDirective} from "./shared/directives/only-letters-validator.directive";
import {AddressValidatorDirective} from "./shared/directives/address-validator.directive";
import {SharedModule} from "./shared/shared.module";
import { LayoutComponent } from './views/layout.component';
import {HomeModule} from "./views/home/home.module";

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
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HomeModule,
    NgbModule
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
