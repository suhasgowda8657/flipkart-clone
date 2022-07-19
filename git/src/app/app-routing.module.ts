import { CartComponent } from './data/cart/cart.component';
import { ProductComponent } from './data/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'',redirectTo:'product',pathMatch:'full'},
{path:'product',component:ProductComponent},
{path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
