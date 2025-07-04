import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
     if (username === 'duy' && password === 'chau') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } 
    return false;
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user  === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}
