import { Swagger } from './swagger.model';
import { SwaggerFilter } from './swagger-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class SwaggerService {
  swaggerList: Swagger[] = [];

  quote: any;

  private baseUrl: string = 'https://service.kemenkeu.go.id/sample/quote/api/Sample/'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getData() {   
    const url = this.baseUrl;
    return this.http.get<Swagger[]>(url + 'GetAllSamples');
  }

  loadData(): void {
    this.getData().subscribe({
      next: (res: any) => {
        this.swaggerList = res.data;
        console.log(this.swaggerList, "nameList");
        console.log(res.statusCode, "STATUSNYAA!");
        console.log(res.message, "message");
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

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

  // save(entity: Swagger): Observable<Swagger> {
  //   let params = new HttpParams();
  //   let url = '';
  //   if (entity.id) {
  //     url = `${this.api}/${entity.id.toString()}`;
  //     params = new HttpParams().set('ID', entity.id.toString());
  //     return this.http.put<Swagger>(url, entity, {headers, params});
  //   } else {
  //     url = `${this.api}`;
  //     return this.http.post<Swagger>(url, entity, {headers, params});
  //   }
  // }

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

