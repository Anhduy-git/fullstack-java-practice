import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  ngOnInit() {
    console.log('LoginComponent initialized');
  }

  handleLogin() {
    console.log('Login attempted with:', this.username, this.password);
    if (this.username == 'duy' && this.password == 'chau') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
