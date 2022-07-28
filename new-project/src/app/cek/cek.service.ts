import { Cek } from './cek';
import { CekFilter } from './cek-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class CekService {
  cekList: Cek[] = [];
  api = 'http://www.angular.at/api/hotel';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Cek> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Cek>(url, {params, headers});
  }

  load(filter: CekFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.cekList = result;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: CekFilter): Observable<Cek[]> {
    const params = {
      'city': filter.city,
    };

    return this.http.get<Cek[]>(this.api, {params, headers});
  }

  save(entity: Cek): Observable<Cek> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Cek>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Cek>(url, entity, {headers, params});
    }
  }

  delete(entity: Cek): Observable<Cek> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Cek>(url, {headers, params});
    }
    return EMPTY;
  }
}

