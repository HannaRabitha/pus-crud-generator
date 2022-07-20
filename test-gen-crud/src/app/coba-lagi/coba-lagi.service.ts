import { CobaLagi } from './coba-lagi';
import { CobaLagiFilter } from './coba-lagi-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class CobaLagiService {
  cobaLagiList: CobaLagi[] = [];
  api = 'http://www.angular.at/api/testcrud';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<CobaLagi> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<CobaLagi>(url, {params, headers});
  }

  load(filter: CobaLagiFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.cobaLagiList = result;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: CobaLagiFilter): Observable<CobaLagi[]> {
    const params = {
      'city': filter.city,
    };

    return this.http.get<CobaLagi[]>(this.api, {params, headers});
  }

  save(entity: CobaLagi): Observable<CobaLagi> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<CobaLagi>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<CobaLagi>(url, entity, {headers, params});
    }
  }

  delete(entity: CobaLagi): Observable<CobaLagi> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<CobaLagi>(url, {headers, params});
    }
    return EMPTY;
  }
}

