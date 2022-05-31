import { AboutComponent } from './companent/about/about.component';
import { ViewproductbyidComponent } from './companent/viewproductbyid/viewproductbyid.component';
import { UpdateproductComponent } from './companent/updateproduct/updateproduct.component';
import { ErrorComponent } from './companent/error/error.component';
import { AddproductsComponent } from './companent/addproducts/addproducts.component';
import { ProductdetailsComponent } from './companent/productdetails/productdetails.component';
import { ProductsComponent } from './companent/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './companent/home/home.component';
import { AdminComponent } from './companent/admin/admin.component';
import { AdminDetailsComponent } from './companent/admin-details/admin-details.component';

const routes: Routes = [
  {path: "" ,redirectTo:"home",pathMatch:"full"},
{path:"home",component:HomeComponent},
  {path: "products",component:ProductsComponent},
  {path:"products/category/:id",component:ViewproductbyidComponent},
  {path:"about",component:AboutComponent},
  {path:"products/new",component:AddproductsComponent},
  {path:"products/:id",component:ProductdetailsComponent},
  {path:"products/update/:id",component:UpdateproductComponent},
  {path:"admin",component:AdminComponent},
  {path:"admin/details",component:AdminDetailsComponent},
  {path:"**",component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
