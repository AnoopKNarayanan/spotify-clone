import { Injectable } from '@angular/core';
import { Artist, Library, SelectedSortOrder, SortOrder } from '../models/library';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getData(): Observable<any>{
    const url = this.configService.getLibraryUrl();
    return this.http.get(url).pipe(
      map(resp => {
        return resp;
      })
    );
  }
}
