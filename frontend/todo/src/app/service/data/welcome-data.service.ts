import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor() { }

  executedHelloWorldBeanService() {
    console.log('Execute HelloWorldBeanService');
  }
}
