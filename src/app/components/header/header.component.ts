import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _authServie: AuthService, private router: Router) { }

  logout() {
    this.router.navigate(['/login']);
    this._authServie.logout();
    Swal.fire('Logout successfully')
  }
}
