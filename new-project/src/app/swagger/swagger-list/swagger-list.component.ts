import { Component, OnInit } from '@angular/core';
import { SwaggerFilter } from '../swagger-filter';
import { SwaggerService } from '../swagger.service';
import { RootObject, Swagger } from '../swagger.model';

@Component({
  selector: 'app-swagger',
  templateUrl: 'swagger-list.component.html'
})
export class SwaggerListComponent implements OnInit {

  filter = new SwaggerFilter();

  quote: any;


  selectedSwagger!: Swagger; //from model.ts
  selectedRootObject!: RootObject; //from model.ts

  // feedback: any = {};
  cp: number = 1;
  key: string = '';
  reverse: boolean = false;


  get swaggerList(): Swagger[] {
   return this.swaggerService.swaggerList;
  }

  constructor(private swaggerService: SwaggerService) {
  }

  ngOnInit() {
    console.log("FUNCTION NG ON INIT");
    this.swaggerService.loadData();
    console.log(this.filter, "FILTER");
    
    console.log("AFTER FUNCTION NG ON INIT");
  }


  search(){
    // if(this.quote == "") 
    //   this.ngOnInit();
    // }else {
    //   this.swaggerList.filter(res => {
    //     return res.quote.toLocaleLowerCase().match(this.quote.toLocaleLowerCase());
    //   })
    //   }
    }
  


  // search(): void {
  //   this.swaggerService.load(this.filter);
  // }

  // select(selected: Swagger): void {
  //   this.selectedSwagger = selected;
  // }

  // delete(swagger: Swagger): void {
  //   if (confirm('Are you sure?')) {
  //     this.swaggerService.delete(swagger).subscribe({
  //       next: () => {
  //         this.feedback = {type: 'success', message: 'Delete was successful!'};
  //         setTimeout(() => {
  //           this.search();
  //         }, 1000);
  //       },
  //       error: err => {
  //         this.feedback = {type: 'warning', message: 'Error deleting.'};
  //       }
  //     });
  //   }
  // }

  sort(key:string) {
    this.key = key;
    this.reverse = !this.reverse;

  }
  
}
