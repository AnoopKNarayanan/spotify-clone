import { Injectable } from '@angular/core';
import { Artist, Library, SelectedSortOrder, SortOrder } from '../models/library';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    const url = 'https://api.npoint.io/b73da9d9775da9a9d8cd';
    return this.http.get(url).pipe(
      map(resp => {
        return resp;
      })
    );
  }
}
