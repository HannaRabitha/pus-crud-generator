import { Swagger } from './swagger.model';
import { SwaggerFilter } from './swagger-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class SwaggerService {
  swaggerList: Swagger[] = [];

  private baseUrl: string = 'https://service.kemenkeu.go.id/sample/quote/api/Sample/'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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


  findById(id: string): Observable<Swagger> {
    const url = `${this.baseUrl}/GetSampleById/${id}`;
    const params = { id: id };
    return this.http.get<Swagger>(url, {params, headers});
  }

  // filter(endpoint: string): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/GetAllSamples`)
  // }




  // loadDataFilter(): void {
  //   this.loadData();
  //     this.swaggerList = this.swaggerList.filter(res => {
  //       return res.quote.toLocaleLowerCase().match(this.quote.toLocaleLowerCase());
  //     })
  // }

 

  // findById(id: string): Observable<Swagger> {
  //   const url = `${this.api}/${id}`;
  //   const params = { id: id };
  //   return this.http.get<Swagger>(url, {params, headers});
  // }

  // load(filter: SwaggerFilter): void {
  //   this.find(filter).subscribe({
  //     next: result => {
  //       this.swaggerList = result;
  //     },
  //     error: err => {
  //       console.error('error loading', err);
  //     }
  //   });
  // }

  // find(filter: SwaggerFilter): Observable<Swagger[]> {
  //   const params = {
  //     'city': filter.city,
  //   };

  //   return this.http.get<Swagger[]>(this.api, {params, headers});
  // }

  save(entity: Swagger): Observable<Swagger> {
    let params = new HttpParams();
    const endpoint = 'CreateSample'
    let url = '';

    if (entity.id) {
      url = `${this.baseUrl}+${endpoint}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Swagger>(url, entity, {headers, params});
    } else {
      url = `${this.baseUrl}`;
      return this.http.post<Swagger>(url, entity, {headers, params});
    }
  }

  // delete(entity: Swagger): Observable<Swagger> {
  //   let params = new HttpParams();
  //   let url = '';
  //   if (entity.id) {
  //     url = `${this.api}/${entity.id.toString()}`;
  //     params = new HttpParams().set('ID', entity.id.toString());
  //     return this.http.delete<Swagger>(url, {headers, params});
  //   }
  //   return EMPTY;
  // }
}

