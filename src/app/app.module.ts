import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { UserComponent } from './components/user/user.component';
import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MarketComponent } from './components/market/market.component';
import { MarketItemComponent } from './components/market-item/market-item.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProdDirective } from './directives/prod.directive';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    UserComponent,
    TodoComponent,
    HomeComponent,
    ContactsComponent,
    NotFoundComponent,
    CalculatorComponent,
    MarketComponent,
    MarketItemComponent,
    BasketComponent,
    ProdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
