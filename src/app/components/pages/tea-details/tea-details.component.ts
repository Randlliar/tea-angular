import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../../services/catalog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Card} from "../../../types/card";

@Component({
  selector: 'tea-details',
  templateUrl: './tea-details.component.html',
  styleUrls: ['./tea-details.component.scss']
})
export class TeaDetailsComponent implements OnInit {

  public catalog: Card;

  constructor(private catalogService: CatalogService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
    this.catalog = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description:''
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {

        this.catalogService.getTea(+params['id'])
          ?.subscribe({
            next: (data) => {
              this.catalog = data;
              localStorage.setItem('title', this.catalog.title);
              console.log(localStorage)
            },
            error: (error) => {
              this.router.navigate(['/']);
            }
          })
      }
    })
  }

}
