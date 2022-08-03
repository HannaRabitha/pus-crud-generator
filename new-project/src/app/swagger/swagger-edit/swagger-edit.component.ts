import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwaggerService } from '../swagger.service';
import { Swagger } from '../swagger.model';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-swagger-edit',
  templateUrl: './swagger-edit.component.html'
})
export class SwaggerEditComponent implements OnInit {

  id!: string;
  swagger!: Swagger;
  feedback: any = {};
  
  isNew: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private swaggerService: SwaggerService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { 
            this.isNew = true;
            return of(new Swagger()); 
          }
          return this.swaggerService.getById(id);
        })
      )
      .subscribe({
        next: (swagger:any) => {
          if (this.isNew === true) {
          this.swagger = swagger;
          } else {
            this.swagger = swagger.data;
          }
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.swaggerService.addData(this.swagger).subscribe({
      next: swagger => {
        this.swagger = swagger;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/swaggers']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/swaggers']);
  }
}
