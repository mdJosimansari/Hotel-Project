import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import {  Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private router:Router, private authService:AuthService, private spinner:NgxSpinnerService){}

  ngOninit(): void {

    this.spinner.show()

    setTimeout(()=>{
      this.spinner.hide()
    },3000)
  }

  
  

  loginSubmit(){
    if(this.loginForm.value.email == "customer@gmail.com" && this.loginForm.value.password== "1234"){
      this.router.navigateByUrl('/customer/home')
      this.authService.setData(this.loginForm.value.email)
    }
    else if(this.loginForm.value.email == "admin@gmail.com" && this.loginForm.value.password == "1234"){
      this.router.navigateByUrl('/admin/dashboard')
      this.authService.setData(this.loginForm.value.email)
    }
    
  }

}
