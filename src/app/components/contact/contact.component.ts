import { Component, OnInit } from '@angular/core';
//import {  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   lat: number = 12.9716;
  lng: number = 77.5946;
   formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    alert = false;
  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(f) {
    //console.log(f);
    f.submitted = false;
    this.formData.name = '';
    this.formData.email = '';
    this.formData.message = '';
    this.formData.subject = '';
    this.alert = true;
  }

}