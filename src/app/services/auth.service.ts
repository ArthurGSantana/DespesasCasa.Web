import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.local';
import { HttpClient } from '@angular/common/http';
import { IAuth, ILogin } from '../core/interfaces/auth.interface';
import { Observable, tap } from 'rxjs';
import { TokenService } from './token.service';
import { IUser } from '../core/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = `${environment.apiUrl}/auth`;
  handleErrorCustom = { handleErrorCustom: 'true' };

  userActive = signal<IUser | null>(null);

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(login: ILogin): Observable<IAuth> {
    return this.http
      .post<IAuth>(`${this.apiUrl}`, login, {
        headers: this.handleErrorCustom
      })
      .pipe(
        tap((res) => {
          if (res.token) {
            this.tokenService.setToken(res.token);
          }
        })
      );
  }
}
