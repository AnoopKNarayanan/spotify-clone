import { Injectable } from '@angular/core';
import { Section, SectionItem } from '../models/dashboard';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    const url = 'https://api.npoint.io/5dfa3e388a9ca4b01661';
    return this.http.get(url).pipe(
      map(resp => {
        return resp;
      })
    );
  }
}
