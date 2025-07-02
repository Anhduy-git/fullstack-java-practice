import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  title: string = 'Welcome to the Todo App!';
  name: string = '';

  constructor(private route: ActivatedRoute) {
    // You can inject services here if needed
    console.log('WelcomeComponent constructor called');
    
  }

  ngOnInit() {
    console.log('WelcomeComponent initialized');
    this.name = this.route.snapshot.params['name']
  }

}
