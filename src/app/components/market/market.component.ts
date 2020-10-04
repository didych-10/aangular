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
    onSale: true,
      url: 'https://jabko.ua/image/cache/catalog/products/2020/05/301856/677-700x700.jpg'
  },
  {
    name: 'Iphone X',
    price: 550,
      url: 'https://jabko.ua/image/cache/catalog/files_com/jabko_black/iphone/iphone-x/x-space-420x420.jpg'
  },
  {
    name: 'Apple watch',
    price: 475,
    onSale: true,
      url: 'https://jabko.ua/image/cache/catalog/files_com/jabko_black/watch/40-sl-700x700.jpg'
  },

     {
     name: 'Mackbook Pro',
     price: 1000,
         url: 'https://jabko.ua/image/cache/catalog/files_com/jabko_black/macbook/pro-13-space-black-420x420.jpg'
   },
   {
     name: 'Iphone SE 2020',
     price: 400,
       url: 'https://jabko.ua/image/cache/catalog/files_com/jabko_black/iphone/iphone-se/se-black-700x700.png'
   },
   {
     name: 'IMac pro',
     price: 3000,
       url: 'https://jabko.ua/image/cache/catalog/products/2020/08/041912/imac-2020%20(1)-420x420.jpg'
   },

   {
     name: 'Apple TV',
     price: 300,
       url: 'https://jabko.ua/image/cache/catalog/products/2020/05/251132/226-420x420.jpg'

   },
   {
     name: 'Apple AirPods',
     price: 135,
       url: 'https://jabko.ua/image/cache/catalog/files_com/jabko_black/gadj/airpods/mrjx2dass-420x420.jpg'
   },
   {
     name: 'Apple AirPods Pro',
     price: 250,
       url: 'https://jabko.ua/image/cache/catalog/files_com/jabko_black/gadj/airpods/airpods-pro-700x700.jpg'
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
