import { ActivatedRoute } from '@angular/router';
import { ProductservicesService } from './../../services/productservices.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-viewproductbyid',
  templateUrl: './viewproductbyid.component.html',
  styleUrls: ['./viewproductbyid.component.css']
})
export class ViewproductbyidComponent implements OnInit {
    productlist:any;
    searchcategory:any;
    ProductName:any;
  constructor(private myservices:ProductservicesService,private activited:ActivatedRoute) { }

  ngOnInit(): void {

    this.activited.paramMap.subscribe(params=>
      {
        this.searchcategory=params.get("id");
        console.log(this.searchcategory);
      }
      );
      this.getproductcat(this.searchcategory);
  }

  getproductcat(id:any)
  {
    this.myservices.searchcategory(id).subscribe(
      categorydata=>{
      this.productlist= categorydata
      console.log(this.productlist)
      }
    )
  }
}
