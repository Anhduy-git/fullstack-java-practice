import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  title = 'Welcome to the Todo App!';

  ngOnInit() {
    console.log('WelcomeComponent initialized');
  }

}
