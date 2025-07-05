import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  title: string = 'Welcome to the Todo App!';
  name: string = '';
  private service: WelcomeDataService = inject(WelcomeDataService);

  constructor(private route: ActivatedRoute) {
    // You can inject services here if needed
    console.log('WelcomeComponent constructor called');
    
  }

  ngOnInit() {
    console.log('WelcomeComponent initialized');
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.service.executedHelloWorldBeanService();
  }

}
