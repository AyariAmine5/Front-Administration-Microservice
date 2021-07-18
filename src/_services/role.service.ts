import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8085/roles';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient) {}

  addRole(name: string, description: string, id: number): Observable<any> {
    return this.http.post(
      `${API_URL}/createrole/${id}`,
      {
        name,
        description,
      },
      httpOptions
    );
  }

  getOrganizationRoles(id: number): Observable<any> {
    return this.http.get(`${API_URL}/getorganizationroles/${id}`, httpOptions);
  }

  deleteRole(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/deleteRole/${id}`, httpOptions);
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
