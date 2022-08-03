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

  private api: string = 'https://service.kemenkeu.go.id/sample/quote/api/Sample/'; // URL to web api
  private endpointCreate: string = 'CreateSample';
  private endpointRead: string = 'GetAllSamples';
  private endpointReadById: string = 'GetSampleById';
  private endpointUpdate: string = 'UpdateSample';
  private endpointDelete: string = 'DeleteSample';


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
    const params = {
      'Filters': 'quote' + '@=' + filter.quote,
      // 'Page': 1,
      // 'PageSize': 6
    };
    
    return this.http.get<Swagger[]>(this.api + this.endpointRead, {params, headers});
  }


  getById(id: string): Observable<Swagger> {
    const url = `${this.api}${this.endpointReadById}/${id}`;
    const params = { id: id };
    return this.http.get<Swagger>(url, {params, headers});
  }

  addData(entity: Swagger): Observable<Swagger> {
    let params = new HttpParams();
    let url = '';

    if (entity.id) { //Updated By ID
      
      url = `${this.api}/${this.endpointUpdate}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Swagger>(url, entity, {headers, params});
    } else { //Create Data
      url = `${this.api}/${this.endpointCreate}`;
      return this.http.post<Swagger>(url, entity, {headers, params});
    }
    
  }

  deleteData(entity: Swagger): Observable<Swagger> {
    let params = new HttpParams();
    let url = '';

    if (entity.id) {
      url = `${this.api}/${this.endpointDelete}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Swagger>(url, {headers, params});
    }
    return EMPTY;
  }
}

