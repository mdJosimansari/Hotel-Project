import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit{

  loginform = new FormGroup({
    name: new FormControl(),
    contact: new FormControl(),
    checkindate: new FormControl(),
    checkoutdate: new FormControl(),
    noofpeople: new FormControl()


  })

  constructor(){}

  ngOnInit(): void {
    
  }

  login(){}
}
