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
    roles: Array<Role>,
    organization_id
  ): Observable<any> {
    return this.http.post(
      `${API_URL}/CreateUser2/${organization_id}`,
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

  getOrganizationUsers(id: number): Observable<any> {
    return this.http.get(`${API_URL}/getorganizationusers/${id}`, httpOptions);
  }

  GetOrganizationByName(str: string): Observable<any> {
    return this.http.get(
      `${API_URL}/GetOrganizationIdByName/${str}`,
      httpOptions
    );
  }

  getAllRoles(): Observable<any> {
    return this.http.get(`${API_URL}/getallroles`, httpOptions);
  }

  updateUser(id: number, username: string, email: string): Observable<Object> {
    return this.http.post(
      `http://localhost:8091/api/auth/UpdateUser/${id}`,
      {
        id: id,
        username: username,
        email: email,
      },
      httpOptions
    );
  }

  getUser(id: number): Observable<any> {
    return this.http.get(
      `http://localhost:8091/api/auth/GetUserById/${id}`,
      httpOptions
    );
  }

  /*update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }*/
}
