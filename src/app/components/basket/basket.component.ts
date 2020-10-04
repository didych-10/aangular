import { Component, OnInit } from '@angular/core';
import {MarketService} from '../../services/market.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
basketItems: IBasketItem[] = [];
  constructor(public marketService: MarketService) { }

  ngOnInit(): void {
    this.marketService.$basketSubject.subscribe((newItem: IBasketItem) => {

      this.basketItems.push(newItem);
    });
  }
getTotalPrice(items: IBasketItem[]): number {
    let sum = 0;
    items.forEach(item => sum += item.price);
    return sum;
}
// tslint:disable-next-line:typedef
removeItem(i: number) {
    this.basketItems.splice(i, 1);
}

}
 export interface IBasketItem {
  name: string;
  price: number;
  onSale?: boolean;
  url: string;

}
