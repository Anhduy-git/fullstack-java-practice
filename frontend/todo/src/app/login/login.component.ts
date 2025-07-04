import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage : string = 'Invalid Credentials'
  invalidLogin : boolean = false;

  constructor(private router: Router, private hardCodedAuthenticationService: HardcodedAuthenticationService) {}

  ngOnInit() {
    console.log('LoginComponent initialized');
  }

  handleLogin() {
    console.log('Login attempted with:', this.username, this.password);
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
      // redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
