import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isActive: boolean = false;

  activateContainer() {
    this.isActive = true;
  }

  deactivateContainer() {
    this.isActive = false;
  }
}
