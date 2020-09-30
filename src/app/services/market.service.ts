import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  basketItems: any[] = [];

  $basketSubject = new Subject();
  constructor() { }


}
