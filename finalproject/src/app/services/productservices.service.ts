import { category } from './../companent/gategory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {

  constructor(private MyHttp:HttpClient) { }
  baseurl ="http://localhost:3000/Products";
  baseurl1="http://localhost:3000/category";

  GetAllProducts()
  {
    return this.MyHttp.get(this.baseurl);
  }

  GetProductbyid(id:any)
  {
    // return this.MyHttp.get(http://localhost:3000/Products+"/"+id)
    return this.MyHttp.get(`${this.baseurl}/${id}`);
  }

  AddProduct(product:any)
  {
    const formdata = new FormData();
    formdata.append('image', product.img)
    product.image=`/assets/images/${product.img}`;
    return this.MyHttp.post(this.baseurl, product);
  }

  deleteproduct(id:any)
  {
    return this.MyHttp.delete(`${this.baseurl}/${id}`);
  }

  updateProduct(id:any,data:any)
  {
       return this.MyHttp.put(`${this.baseurl}/${id}`,data)
  }
  searchcategory(Categoryid:any)
  {
    const baseur2 ="http://localhost:3000/Products?Categoryid="+Categoryid;
    return this.MyHttp.get<any>(baseur2);
  }
  listproductbycat()
  {
    return this.MyHttp.get<any>(`${this.baseurl1}`);
  }
}


//npm i json-server -g
//json-server projectname.json --watch
//ng serve -o
//npm i bootstrap
//ng g c --skip-tests -inline-style
//ng g s servicesname
//npm i ng2-search-filter

