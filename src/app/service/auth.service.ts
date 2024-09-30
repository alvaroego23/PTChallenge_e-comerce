import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;
  isAuth=signal(false);
  

  constructor() {
    
  }

  isAuthenticated():boolean{
    if(this.isAuth()){
      return true;

    }else{
      return false;
    }
  }

  login(username: string, password: string) {
    return this._http.post<any>(this._endPoint, {
      username: username,
      password: password
    });
  }
}
