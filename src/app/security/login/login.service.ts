import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MEAT_API } from "app.api";
import { User } from "./user.model";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user!: User

  constructor(private httpClient: HttpClient, private router: Router) { }

  public handleLogin(path?: string) {
    this.router.navigateByUrl("/login");
  }

  public isLoggedIn(): boolean {
    return this.user !== undefined
  }

  public login(email: string, password: string): Observable<User> {
    const user = this.httpClient.post<User>(`${MEAT_API}/login`, { email, password })

    user
      .toPromise()
      .then(user => this.user = user)
      .catch(error => "erro na promise");

    return user;
  }
}