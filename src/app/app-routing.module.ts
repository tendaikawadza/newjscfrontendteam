import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { User } from './model/user';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';
import { StockComponent } from './stock/stock.component';
import { ApproavedrequastComponent } from './approavedrequast/approavedrequast.component';
import { InventoryrequastComponent } from './inventoryrequast/inventoryrequast.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
    {path:'stock'  ,component:StockComponent},
  { path: 'user/management', component: UserComponent},
  { path: 'people', component:PeopleComponent},   
  {path:'approavedrequast', component:ApproavedrequastComponent},
  {path:'inventoryrequast', component:InventoryrequastComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static array: any;
}
export const routingComponents=[PeopleComponent,StockComponent]



