import { Injectable } from '@angular/core';
import { Track } from '../models/track';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = 'https://api.npoint.io/3854b1336524d2b90eae';
    return this.http.get(url).pipe(
      map(resp => {
        return resp;
      })
    );
  }
}
