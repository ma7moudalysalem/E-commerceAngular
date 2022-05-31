import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductservicesService } from './../../services/productservices.service';


@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
  Url:any;
  ProductName:any;
  products:any;
  constructor(private myservices:ProductservicesService,private activited:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.myservices.GetAllProducts().subscribe(
      (data)=>{this.products=data},
      (err)=>{alert(err)}
    )

  }
  deleteproc(number:number)
  {
    if (confirm("are you sure delete product") ==  true) {
    this.myservices.deleteproduct(number).subscribe(
      data=>{
        console.log(data);
        this.Url="/admin/details"
        alert("success");
        window.location.reload();
      })
    }
     return false;
  ;
  }

}
