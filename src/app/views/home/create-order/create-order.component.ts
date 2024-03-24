import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CatalogService} from "../../../shared/services/catalog.service";

@Component({
  selector: 'create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute,
              private catalogService: CatalogService) {
  }

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;
  public responseSuccess = false;
  public isSubmit = false;

    productTitle = new FormControl();
    address = new FormControl();
    name = new FormControl();
    surname = new FormControl();
    phone = new FormControl('', [Validators.required]);
    comment = new FormControl();
    zip = new FormControl();
    country = new FormControl();



  ngOnInit(): void {

    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.productTitle.setValue(params['product']);
        this.productTitle.disable();
      }
    })
  }

  public createOrder() {
    this.subscriptionOrder = this.catalogService.createOrder({
      name: this.name.value,
      last_name: this.surname.value,
      phone: this.phone.value!,
      country: this.country.value,
      zip: this.zip.value,
      product: this.productTitle.value,
      address: this.address.value,
      comment: this.comment.value,
    })
      .subscribe(response => {
        if (response.success && !response.message) {
          this.responseSuccess = response.success;
          this.isSubmit = false;
        } else {

          this.responseSuccess = response.success;
          this.isSubmit = true;

          console.log(this.responseSuccess)
          console.log( this.isSubmit)
          alert('Error')
        }
      })
  }


  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }
}
