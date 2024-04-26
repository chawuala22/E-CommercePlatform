import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInValue = false;

  constructor() {
    // Verificar si el usuario ya estaba autenticado antes de actualizar la página
    const storedStatus = localStorage.getItem('isLoggedIn');
    if (storedStatus) {
      this.isLoggedInValue = JSON.parse(storedStatus);
    }
  }

  isLoggedIn(): boolean {
    return this.isLoggedInValue;
  }

  login() {
    // Simular el inicio de sesión exitoso
    this.isLoggedInValue = true;
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  }

  logout() {
    // Simular el cierre de sesión
    this.isLoggedInValue = false;
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
    localStorage.removeItem('userRegister');
  }

  validatorUser(body: any) {}

  saveInfo(info: any) {
    localStorage.setItem('userRegister', JSON.stringify(info));
  }

  getInfo() {
    const storedData = localStorage.getItem('userRegister');
    return storedData ? JSON.parse(storedData) : [];
  }

 
}
