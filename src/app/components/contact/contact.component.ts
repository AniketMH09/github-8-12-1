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
  formData = {};
  constructor() { }

  ngOnInit() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  onSubmit() {
   
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

}