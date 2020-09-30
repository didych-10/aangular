import { Component, OnInit } from '@angular/core';
import {IBasketItem} from "../basket/basket.component";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
 products: IBasketItem[] = [
  {
    name: 'Iphone 7',
    price: 400,
    onSale: true
  },
  {
    name: 'Iphone X',
    price: 550
  },
  {
    name: 'Apple watch',
    price: 475,
    onSale: true
  },
  {
    name: 'Samsung galaxy A10',
    price: 500
  },
   {
     name: 'Mackbook Pro',
     price: 1000
   },
   {
     name: 'Iphone SE 2020',
     price: 400
   },
   {
     name: 'Iphone 11',
     price: 760
   },
   {
     name: 'IMac pro',
     price: 3000
   },
   {
     name: 'Huawei P Smart',
     price: 350
   },
   {
     name: 'Apple Box',
     price: 300
   },
   {
     name: 'Apple AirPods',
     price: 135
   },
   {
     name: 'Apple AirPods Pro',
     price: 250
   },
   {
     name: 'JBL Xtreme',
     price: 235
   }

  ];
 some: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  reciveNewPrice(price: number): void {
    this.some += price;
  }

}
