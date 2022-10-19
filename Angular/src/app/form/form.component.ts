import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm: FormGroup | any;

  maritalStatus = [
    'Married', 'Single','Widow'
  ]

  countryList = [
    {'countryName' : 'India'},
    {'countryName': 'Pakistan'},
    {'countryName' : 'Singapore'}
  ]

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl(null),
      'address': new FormGroup({
        'country': new FormControl(null),
        'city': new FormControl(null),
        'street': new FormControl(null),
        'pincode': new FormControl(null),
      })
    });

    this.userForm.setValue({
      firstname : 'sree',
      lastname : 'devi',
      email : 'sree@xyz.com',
      gender : 'female',
      address:{
        country:'Singapore',
        city:'chennai',
        street:"xzy street, abcd Road",
        pincode:'539776'
      }
    });

  }
  onSubmit()
  {
    console.log(this.userForm)
  }

}
