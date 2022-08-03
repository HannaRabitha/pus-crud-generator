import { Swagger } from './swagger.model';
import { SwaggerFilter } from './swagger-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Data } from '@angular/router';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class SwaggerService {
  swaggerList: Swagger[] = [];

  private baseUrl: string = 'https://service.kemenkeu.go.id/sample/quote/api/Sample/'; // URL to web api

  constructor(private http: HttpClient) {
  }

  loadData(filter: SwaggerFilter): void {    
    this.getData(filter).subscribe({
      next: (res: any) => {
        this.swaggerList = res.data;
        console.log(res.statusCode, "Status Code");
        console.log(res.message, "message");
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  getData(filter: SwaggerFilter){   
    const endpoint = 'GetAllSamples';

    const params = {
      'Filters': 'quote' + '@=' + filter.quote,
      // 'Page': 1,
      // 'PageSize': 6
    };
    
    return this.http.get<Swagger[]>(this.baseUrl + endpoint, {params, headers});
  }


  getById(id: string): Observable<Swagger> {
    const url = `${this.baseUrl}GetSampleById/${id}`;
    const params = { id: id };
    return this.http.get<Swagger>(url, {params, headers});
  }

  addData(entity: Swagger): Observable<Swagger> {
    let params = new HttpParams();
    let url = '';
    let endpoint = '';

    if (entity.id) { //Updated By ID
      endpoint = 'UpdateSample'
      url = `${this.baseUrl}/${endpoint}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Swagger>(url, entity, {headers, params});
      
    } else { //Create Data
       endpoint = 'CreateSample';
      url = `${this.baseUrl}/${endpoint}`;
      return this.http.post<Swagger>(url, entity, {headers, params});
    }
    
  }

  deleteData(entity: Swagger): Observable<Swagger> {
    let params = new HttpParams();
    const endpoint = 'DeleteSample';
    let url = '';

    if (entity.id) {
      url = `${this.baseUrl}/${endpoint}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Swagger>(url, {headers, params});
    }
    return EMPTY;
  }
}

