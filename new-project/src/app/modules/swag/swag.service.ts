import { Swag } from './swag.model';
import { SwagFilter } from './swag-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class SwagService {
  swagList: Swag[] = [];
  
  private api: string = 'https://service.kemenkeu.go.id/sample/quote/api/Sample';
  private endpointCreate: string = '/CreateSample';
  private endpointRead: string = '/GetAllSamples';
  private endpointReadById: string = '/GetSampleById';
  private endpointUpdate: string = '/UpdateSample';
  private endpointDelete: string = '/DeleteSample';

  constructor(private http: HttpClient) {
  }

  loadData(filter: SwagFilter): void {
      this.getData(filter).subscribe({
      next: (res: any) => {
        this.swagList = res.data;
        console.log(res.statusCode);
        console.log(res.message);
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  getData(filter: SwagFilter){
    const params = {
      
        'Filters': 'quote' + '@=' + filter.quote,
        };
        
        return this.http.get<Swag[]>(this.api + this.endpointRead, {params, headers});
    }

  getById(id: string): Observable<Swag> {
    const url = `${this.api}${this.endpointReadById}/${id}`;
    const params = { id: id };
    return this.http.get<Swag>(url, {params, headers});
  }

  addData(entity: Swag): Observable<Swag> {
    let params = new HttpParams();
    let url = '';

    if (entity.id) { //Updated By ID
      url = `${this.api}/${this.endpointUpdate}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Swag>(url, entity, {headers, params});
    } else { //Create Data
      url = `${this.api}/${this.endpointCreate}`;
      return this.http.post<Swag>(url, entity, {headers, params});
    }
  }


  deleteData(entity: Swag): Observable<Swag> {
    let params = new HttpParams();
    let url = '';

    if (entity.id) {
      url = `${this.api}/${this.endpointDelete}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Swag>(url, {headers, params});
    }
    return EMPTY;
  }
}

