import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  private apiUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  listarUsuarios(): Observable<User[]> {
    return this.http.get<User[]> (this.apiUrl);
  }

  buscarUsuarioPorId(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
