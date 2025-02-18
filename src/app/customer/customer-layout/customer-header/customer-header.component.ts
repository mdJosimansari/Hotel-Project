import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {


  isLogin:boolean = false

  ngOnInit(): void {
    this.checkLogin()
  }

  checkLogin(){
    if( this.authService.getToken() !=null){
      this.isLogin = true
    }
    else{
      this.isLogin = false
    }
  }

  logout(){
    this.authService.clearData()
    this.router.navigateByUrl('/login')
  }

constructor(private router:Router, private authService:AuthService){}

 
}
