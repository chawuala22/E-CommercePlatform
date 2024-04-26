import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  userValid: boolean = true;
  changeView: string = 'login'

  constructor(private _authService: AuthService, private router: Router) { }

  sendData() {
    if (this.email === 'email@linktic.com' && this.password === 'Admin123') {
      this._authService.login();
      this.router.navigate(['/']);
    } else {
      this.userValid = false;
    }
  }
}
