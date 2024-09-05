import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.local';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  apiUrl = environment.apiUrl;

  constructor() {}

  jwtTokenValidation(token: string): boolean {
    let decodedToken;

    try {
      decodedToken = jwtDecode(token);
    } catch (error) {
      return false;
    }

    const currentTime = Date.now().valueOf() / 1000;

    if (decodedToken.exp && decodedToken.exp < currentTime) {
      return false;
    }

    return true;
  }

  getToken(): string {
    return localStorage.getItem(`${environment.storagePrefix}_token`) ?? '';
  }

  setToken(token: string): void {
    localStorage.setItem(`${environment.storagePrefix}_token`, token);
  }

  removeToken(): void {
    localStorage.removeItem(`${environment.storagePrefix}_token`);
  }
}
