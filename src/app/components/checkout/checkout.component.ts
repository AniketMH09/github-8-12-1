import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

   show: boolean = false;
   orders = [];
   data: any = {
     companyName: '',
     contryName: 'India',
     cityName: 'Kolhapur',
     stateName: 'Maharastra',
     addressOpt: '',
   };
   login = {
     login_email: '',
     login_password: ''
   };
   addInfo = '';
   total;
  constructor() { }

  ngOnInit() {
   if(localStorage.getItem('added_items')){
     this.orders = JSON.parse(localStorage.getItem('added_items'));
     this.total = parseInt(localStorage.getItem('total'));
     console.log(this.orders,this.total);
   }
  }

  onSubmit(f) {
    console.log(this.data, this.addInfo);
    f.submitted = false;
    this.data = {
     companyName: '',
     contryName: 'India',
     cityName: 'Kolhapur',
     stateName: 'Maharastra',
     addressOpt: '',
   };
   localStorage.removeItem('added_items');
   localStorage.removeItem('total');
  }

  onLoginSubmit(lf){
    console.log(this.login);
    lf.submitted = false;
    this.login.login_email = '';
    this.login.login_password = '';
  }


}