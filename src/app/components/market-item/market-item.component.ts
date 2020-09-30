import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarketService} from "../../services/market.service";
import {style} from "@angular/animations";
import {IBasketItem} from "../basket/basket.component";

@Component({
  selector: 'app-market-item',
  templateUrl: './market-item.component.html',
  styleUrls: ['./market-item.component.scss']
})
export class MarketItemComponent implements OnInit {
count:number = 0;
  @Input('product') product: IBasketItem;
  // @Output('boughtProduct') bougthProduct = new EventEmitter();
  constructor(public marketService: MarketService) { }

  ngOnInit(): void {
  }

  buyProduct(obj: IBasketItem): void {
    this.marketService.$basketSubject.next(obj);
   // this.bougthProduct.emit(price);
   // this.count++;
  }
}
