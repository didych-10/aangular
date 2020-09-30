import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {TodoComponent} from './components/todo/todo.component';
import {HomeComponent} from './components/home/home.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CalculatorComponent} from './components/calculator/calculator.component';
import {MarketComponent} from './components/market/market.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'todos',
    component: TodoComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'market',
  component: MarketComponent
  },

  {
    path: '**',
    component: NotFoundComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
