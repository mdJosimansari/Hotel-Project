import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { baseUrl } from 'endpoint';

@Injectable({
  providedIn: 'root'
})
export class ManageService {


  constructor( private http:HttpClient, private auth:AuthService) { }

  addManage(data:any){
    let headerObj = new HttpHeaders().set("Authorization",this.auth.getToken()?? '')

    return this.http.post(baseUrl+'manage/add', data, {headers:headerObj})
  }

  getAll(data:any){
    return this.http.post(baseUrl + 'room/getAll', data)
  }
  getSingle(data:any){
    return this.http.post(baseUrl + "room/single", data)
  }

  deleteManage(data:any){
    let headerObj = new HttpHeaders().set('Authorization', this.auth.getToken() ?? '')
    return this.http.post(baseUrl+'manage/delete', data,{headers:headerObj})
  }

  updateManage(data:any){
    let headerObj = new HttpHeaders().set("Authorization",this.auth.getToken() ??'')
    return this.http.post(baseUrl+'manage/update', data,{headers:headerObj})
  }
}
