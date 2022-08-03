import { <%= classify(name) %> } from './<%=dasherize(name)%>.model';
import { <%= classify(name) %>Filter } from './<%=dasherize(name)%>-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class <%= classify(name) %>Service {
  <%=camelize(name)%>List: <%=classify(name)%>[] = [];<% const id = getId(model); %>
  
  private api: string = '<%= model.api.url %>';
  private endpointCreate: string = '<%= model.api.create %>';
  private endpointRead: string = '<%= model.api.read %>';
  private endpointReadById: string = '<%= model.api.readById %>';
  private endpointUpdate: string = '<%= model.api.update %>';
  private endpointDelete: string = '<%= model.api.delete %>';

  constructor(private http: HttpClient) {
  }

  loadData(filter: <%= classify(name) %>Filter): void {
      this.getData(filter).subscribe({
      next: (res: any) => {
        this.<%=camelize(name)%>List = res.data;
        console.log(res.statusCode);
        console.log(res.message);
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  getData(filter: <%= classify(name) %>Filter){
    const params = {
      <% for (const field of getFilterFields(model)) { %>
        'Filters': '<%=field.name%>' + '@=' + filter.<%=field.name%>,<% } %>
        };
        
        return this.http.get<<%= classify(name) %>[]>(this.api + this.endpointRead, {params, headers});
    }

  getById(id: string): Observable<<%= classify(name) %>> {
    const url = `${this.api}${this.endpointReadById}/${id}`;
    const params = { <%=id.name%>: id };
    return this.http.get<<%= classify(name) %>>(url, {params, headers});
  }

  addData(entity: <%= classify(name) %>): Observable<<%= classify(name) %>> {
    let params = new HttpParams();
    let url = '';

    if (entity.<%=id.name%>) { //Updated By ID
      url = `${this.api}/${this.endpointUpdate}/${entity.<%=id.name%>.toString()}`;
      params = new HttpParams().set('ID', entity.<%=id.name%>.toString());
      return this.http.put<<%= classify(name) %>>(url, entity, {headers, params});
    } else { //Create Data
      url = `${this.api}/${this.endpointCreate}`;
      return this.http.post<<%= classify(name) %>>(url, entity, {headers, params});
    }
  }


  deleteData(entity: <%= classify(name) %>): Observable<<%= classify(name) %>> {
    let params = new HttpParams();
    let url = '';

    if (entity.<%=id.name%>) {
      url = `${this.api}/${this.endpointDelete}/${entity.<%=id.name%>.toString()}`;
      params = new HttpParams().set('ID', entity.<%=id.name%>.toString());
      return this.http.delete<<%= classify(name) %>>(url, {headers, params});
    }
    return EMPTY;
  }
}

