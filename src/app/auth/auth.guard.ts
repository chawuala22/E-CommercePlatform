import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // El usuario está autenticado y puede acceder a la vista.
    } else {
      this.router.navigate(['/login']);
      console.log('Usuario no autenticado :C');
      
      return false; // El usuario no está autenticado y no puede acceder a la vista.
    }
  }
}
