import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import {Router} from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email=""
    password=""
    invalidLogin=false
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }
  
  checkLogin() {
    if (this.loginservice.authenticate(this.email, this.password)
    ) {
      this.router.navigate(['Jobs'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
