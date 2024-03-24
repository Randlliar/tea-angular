import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../../../types/card";

@Component({
  selector: 'tea-card',
  templateUrl: './tea-card.component.html',
  styleUrls: ['./tea-card.component.scss'],
})
export class TeaCardComponent implements OnInit {
  @Input() card: Card | undefined;

  constructor() {
    this.card = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit(): void {
  }

}
