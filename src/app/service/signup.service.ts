import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  postsignup(data:any,prof:string,comp:any)
  {
    console.log('hit01');
    var pf ;
    if(prof=="rec")
    {
      pf=2;
    }
    else{
      pf=1;
    }
    var cn 
    var cd
    if(comp!='')
    {
      cn = comp.companyName
      cd = comp.companyDescription
    }
    
    return this.http.post('http://localhost:8762/sign-up/post',
    {"companyDescription": cd,
    "companyName": cn,
    "email": data.email,
    "firstName": data.fname,
    "lastName": data.lname,
    "mobileNumber": data.contact,
    "password": data.password,
    "loginId":data.userid,
    "userType": pf})
  }
  validateuserid(data:any)
  {
    console.log(data);
    return this.http.get('http://localhost:8762/profile/validate/userid/'+data)
  }

  validateuseremail(data:any)
  {
    console.log(data);
    return this.http.get('http://localhost:8762/profile/validate/email/'+data)
  }
}
