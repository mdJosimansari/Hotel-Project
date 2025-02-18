import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setData(data:any){
    sessionStorage.setItem('token', data.token)
    sessionStorage.setItem('email',data.email)
    sessionStorage.setItem('userType',data.userType)
  }

  getToken(){
    return sessionStorage.getItem('token')
  }

  clearData(){
    sessionStorage.clear()
  }
}
