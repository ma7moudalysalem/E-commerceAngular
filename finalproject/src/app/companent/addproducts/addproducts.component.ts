import { HttpClient ,HttpEventType} from '@angular/common/http';
import { ProductservicesService } from './../../services/productservices.service';
import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css'],
})

export class AddproductsComponent{


constructor(private myservices:ProductservicesService){}

  AddNewProduct(name: any, price: any, Description: any, img: any, type: any) {
    if(name!=""&&price!=0&&Description!=''&& type!=''){
    let product = { name, price, Description, img, type }
    product.img = this.urllink;
    this.myservices.AddProduct(product).subscribe()
    window.location.reload();

    }
  }

  urllink: any;
  selectFiles(event: any) {
    this.urllink =  event.target.files[0].name
    // if (event.target.files) {
    //   //var reader = new FileReader
    //   //reader.readAsDataURL(event.target.files[0].name)
    //   console.log(event)
    //   // reader.onload = (event: any) => {
    //   //   this.urllink = event.target.result
    //   // }
    // }
  }

 }

