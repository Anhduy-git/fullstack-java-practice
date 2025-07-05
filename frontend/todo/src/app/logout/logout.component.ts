import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  
  constructor(private hardCodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    console.log('LogoutComponent initialized');
    this.hardCodedAuthenticationService.logout();
  }

}
