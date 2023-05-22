import { Injectable } from '@angular/core';
import { Track } from '../models/track';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getData(): Observable<any> {
    const url = this.configService.getTracksUrl();
    return this.http.get(url).pipe(
      map(resp => {
        return resp;
      })
    );
  }
}
