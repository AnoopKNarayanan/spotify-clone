import { Injectable } from '@angular/core';
import { Config } from '../models/config';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: any;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('/assets/config/config.json').pipe(
      map(resp => {
        this.config = resp;
      })
    );
  }

  getDashboardUrl() : string {
    return this.config.dashboardUrl;
  }

  getLibraryUrl() : string {
    return this.config.libraryUrl;
  }

  getTracksUrl() : string {
    return this.config.tracksUrl;
  }
}
