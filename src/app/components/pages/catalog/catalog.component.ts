import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../../services/catalog.service";
import {Router} from "@angular/router";
import {Card} from "../../../types/card";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public catalogs: Card[] = []
  constructor(private catalogService: CatalogService,
              private router: Router,
              ) {
    this.catalogs = [{
      id: 0,
      image: '',
      title: '',
      price: 0,
      description:''
    }]
  }



  ngOnInit(): void {
    this.catalogService.getTeas()
     .subscribe(
       {
         next: (data) => {
           this.catalogs = data;
           console.log(data)
         },
         error: (error) => {
           this.router.navigate(['/']);
         }
       }
     );
  }

}
