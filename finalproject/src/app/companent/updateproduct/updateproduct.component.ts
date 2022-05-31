import { ProductservicesService } from './../../services/productservices.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css'],
})
export class UpdateproductComponent implements OnInit {
productsupdate:any;
alert :boolean =false;
editproduct=new FormGroup({
  name:new FormControl(''),
  Description:new FormControl(''),
  price:new FormControl(''),
  image:new FormControl(''),
  type:new FormControl('')
})
  constructor(
    private activited: ActivatedRoute,
    private myservices: ProductservicesService)
   {

   }

  ngOnInit(): void
  {
    this.myservices.GetProductbyid(this.activited.snapshot.params["id"]).subscribe((data)=>
    {
      console.log(data)
      this.productsupdate=data
      this.editproduct=new FormGroup({
        name:new FormControl( this.productsupdate.name),
        Description:new FormControl(this.productsupdate.Description),
        price:new FormControl(this.productsupdate.price),
        image:new FormControl(this.productsupdate.image),
        type:new FormControl(this.productsupdate.type)
      }
      )}
     ) }
     updateproc()
     {
       this.myservices.updateProduct(this.activited.snapshot.params["id"],this.editproduct.value).subscribe(
         (data)=>{
           console.log(data)
           this.alert=true;
         }
       )
     }
     closealert()
     {
        this.alert=false;
     }
}

