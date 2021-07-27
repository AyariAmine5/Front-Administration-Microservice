import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8092/logs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  constructor(private http: HttpClient) {}

  getOrganizationRecords(id: number): Observable<any> {
    return this.http.get(`${API_URL}/getorganizationlogs/${id}`, httpOptions);
  }

  addRecord(
    description: string,
    ip: string,
    status: string,
    type: string,
    user_id,
    organization_id
  ): Observable<any> {
    return this.http.post(
      `${API_URL}/createLog/${user_id}/${organization_id}`,
      {
        description,
        ip,
        type,
        status,
      },
      httpOptions
    );
  }
}
