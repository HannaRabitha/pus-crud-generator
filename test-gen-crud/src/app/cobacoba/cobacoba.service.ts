import { Cobacoba } from './cobacoba';
import { CobacobaFilter } from './cobacoba-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class CobacobaService {
  cobacobaList: Cobacoba[] = [];
  api = 'http://www.angular.at/api/hotel';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Cobacoba> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Cobacoba>(url, {params, headers});
  }

  load(filter: CobacobaFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.cobacobaList = result;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: CobacobaFilter): Observable<Cobacoba[]> {
    const params = {
      'city': filter.city,
    };

    return this.http.get<Cobacoba[]>(this.api, {params, headers});
  }

  save(entity: Cobacoba): Observable<Cobacoba> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Cobacoba>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Cobacoba>(url, entity, {headers, params});
    }
  }

  delete(entity: Cobacoba): Observable<Cobacoba> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Cobacoba>(url, {headers, params});
    }
    return EMPTY;
  }
}

