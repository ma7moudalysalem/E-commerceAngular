import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './companent/header/header.component';
import { ProductsComponent } from './companent/products/products.component';
import { ProductdetailsComponent } from './companent/productdetails/productdetails.component';
import { ErrorComponent } from './companent/error/error.component';
import { AddproductsComponent } from './companent/addproducts/addproducts.component';
import { UpdateproductComponent } from './companent/updateproduct/updateproduct.component';
import { FooterComponent } from './companent/footer/footer.component';
import { SideproductComponent } from './companent/sideproduct/sideproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './companent/home/home.component';
import { AdminComponent } from './companent/admin/admin.component';
import { AdminDetailsComponent } from './companent/admin-details/admin-details.component';
import { ViewproductbyidComponent } from './companent/viewproductbyid/viewproductbyid.component';
import { AboutComponent } from './companent/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductdetailsComponent,
    ErrorComponent,
    AddproductsComponent,
    UpdateproductComponent,
    FooterComponent,
    SideproductComponent,
    HomeComponent,
    AdminComponent,
    AdminDetailsComponent,
    ViewproductbyidComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
