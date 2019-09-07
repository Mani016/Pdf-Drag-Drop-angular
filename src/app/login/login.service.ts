import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';


@Injectable({
    providedIn: 'root'
})
export class LoginService {
	uri = "https://ctapi.kilobytetech.com/api/user/login"
    

	constructor(private http: HttpClient){

	}
	
	validateLogin(user: User){
		return this.http.post(`${this.uri}`,{
			email : user.email,
			password : user.password
		})
	}

}