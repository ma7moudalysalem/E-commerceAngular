import { ProductservicesService } from './../../services/productservices.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  produuctid=0;
  protectedetails:any;
  constructor(private activited:ActivatedRoute,private myservices:ProductservicesService) {

    this.produuctid=activited.snapshot.params["id"];
   }
  ngOnInit(): void {
    this.myservices.GetProductbyid(this.produuctid).subscribe(
      (data)=>{this.protectedetails=data},
      (err)=>{console.log(err)}
    )

  }

  deleteproc()
  {
    this.myservices.deleteproduct(this.produuctid).subscribe(
      data=>{
        console.log(data);
        confirm("are you sure delete product");
        alert("success delete product")
      }
    );
  }

}
