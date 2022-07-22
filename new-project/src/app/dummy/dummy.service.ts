import { Dummy } from './dummy';
import { DummyFilter } from './dummy-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class DummyService {
  dummyList: Dummy[] = [];
  api = 'http://www.angular.at/api/hotel';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Dummy> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Dummy>(url, {params, headers});
  }

  load(filter: DummyFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.dummyList = result;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: DummyFilter): Observable<Dummy[]> {
    const params = {
      'city': filter.city,
    };

    return this.http.get<Dummy[]>(this.api, {params, headers});
  }

  save(entity: Dummy): Observable<Dummy> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Dummy>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Dummy>(url, entity, {headers, params});
    }
  }

  delete(entity: Dummy): Observable<Dummy> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Dummy>(url, {headers, params});
    }
    return EMPTY;
  }
}

