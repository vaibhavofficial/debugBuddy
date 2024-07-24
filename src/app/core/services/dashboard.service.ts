import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  // GET appList
  getAppList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // GET appDetails
  getAppDetails(id: string): Observable<any[]> {
    console.log('Service', id);
    return this.http.get<any[]>(this.apiUrl);
  }
}
