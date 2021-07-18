import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from 'src/_models/Role';

const API_URL = 'http://localhost:8085/backoffice';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(
    username: string,
    email: string,
    password: string,
    roles: Array<Role>
  ): Observable<any> {
    return this.http.post(
      `${API_URL}/CreateUser2`,
      {
        username,
        email,
        password,
        roles,
      },
      httpOptions
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/deleteUser/${id}`, httpOptions);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${API_URL}/getallusers`, httpOptions);
  }

  getAllRoles(): Observable<any> {
    return this.http.get(`${API_URL}/getallroles`, httpOptions);
  }

  /*update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }*/
}
