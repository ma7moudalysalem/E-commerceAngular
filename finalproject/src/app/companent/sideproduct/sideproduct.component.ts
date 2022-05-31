import { category } from './../gategory';
import { ProductservicesService } from './../../services/productservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sideproduct',
  templateUrl: './sideproduct.component.html',
  styleUrls: ['./sideproduct.component.css']
})
export class SideproductComponent implements OnInit {
    categorylist:any;
  constructor(private myservices:ProductservicesService) { }

  ngOnInit(): void {
this.myservices.listproductbycat().subscribe(
  data=>{
    this.categorylist=data
  }
)
  }

}
