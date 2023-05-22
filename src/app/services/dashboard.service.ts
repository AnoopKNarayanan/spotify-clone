import { Injectable } from '@angular/core';
import { Section, SectionItem } from '../models/dashboard';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getData(): Observable<any>{
    const url = this.configService.getDashboardUrl();
    return this.http.get(url).pipe(
      map(resp => {
        return resp;
      })
    );
  }
}
