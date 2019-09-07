import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from '../model/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent  {

  public user : User;

  constructor(private loginService:LoginService, private router: Router) {
  	this.user = new User();
  }

  validateLogin() {
  	if(this.user.email && this.user.password) {
  		this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        if(result['message'] === 'Login Successfull') {
          alert('Successful Login')
          this.router.navigate(['/pdf']);
        } else {
          alert('Wrong username password');
        }
        
      }, 
      error => {
        console.log('error is ', error);
      });
  	} else {
  		alert('enter user name and password');
  	}
  }
}
