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
          if (id === 'new') { return of(new Swagger()); }
          return this.swaggerService.findById(id);
        })
      )
      .subscribe({
        next: swagger => {
          this.swagger = swagger;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  // save() {
  //   this.swaggerService.save(this.swagger).subscribe({
  //     next: swagger => {
  //       this.swagger = swagger;
  //       this.feedback = {type: 'success', message: 'Save was successful!'};
  //       setTimeout(async () => {
  //         await this.router.navigate(['/swaggers']);
  //       }, 1000);
  //     },
  //     error: err => {
  //       this.feedback = {type: 'warning', message: 'Error saving'};
  //     }
  //   });
  // }

  // async cancel() {
  //   await this.router.navigate(['/swaggers']);
  // }
}
