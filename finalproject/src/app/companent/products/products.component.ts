import { ProductservicesService } from './../../services/productservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private myservices:ProductservicesService) { }
  ProductName:any;
  products:any;

  ngOnInit(): void {
    this.myservices.GetAllProducts().subscribe(
      (data)=>{this.products=data},
      (err)=>{alert(err)}
    )
  }
}
