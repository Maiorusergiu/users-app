import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get<User[]>(`/users`);
  }

  createUser(user: User) {
    return this.http.post(`/users/register`, user);
  }
  deleteUser(id: number){
    return this.http.delete(`/users/${id}`);
  }
  userId(id: number){
    return this.http.get(`/users/${id}`);
  }
  updateUser(id: number, user:User) {
    return this.http.put(`/users/${id}`,user);
  }
}
