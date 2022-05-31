import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
Name=""
Password=null
Url="";
  constructor() { }

  ngOnInit(): void {
  }
  // ValidatedLogin(name:string,password:number)
  // {
  //   if(this.Name==name &&this.Password==password)
  //   {
  //       this.Url="/products"
  //   }else{
  //     alert('try again');
  //   }}
  AddAdmin()
  {
   if(this.Name=="Admin"&&this.Password==123)
   {
     this.Url="/admin/details"
   }else{
    this.Url="/admin"
   }
  }

}
