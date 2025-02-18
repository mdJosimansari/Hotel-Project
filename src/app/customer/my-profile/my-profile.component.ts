import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

profileForm = new FormGroup({
  name:  new FormControl(),
  email: new FormControl,
  password: new FormControl 
})

ngOnInit(): void {
  
}

submit(){
  console.log(this.profileForm.value)
}
}
