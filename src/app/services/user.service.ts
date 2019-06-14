import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  public getActiveUser(): User {
    const ans = JSON.parse(localStorage.getItem('user'));
    return ans;
  }
  public setActiveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
