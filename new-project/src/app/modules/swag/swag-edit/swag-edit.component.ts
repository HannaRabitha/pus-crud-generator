import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwagService } from '../swag.service';
import { Swag } from '../swag.model';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-swag-edit',
  templateUrl: './swag-edit.component.html'
})
export class SwagEditComponent implements OnInit {

  id!: string;
  swag!: Swag;
  feedback: any = {};

  isNew:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private swagService: SwagService) {
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
            return of(new Swag()); 
          }
          return this.swagService.getById(id);
        })
      )
      .subscribe({
        next: (swag:any) => {

          if (this.isNew === true) {
            this.swag = swag;
          } else {
            this.swag = swag.data;
          }
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.swagService.addData(this.swag).subscribe({
      next: swag => {
        this.swag = swag;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/swags']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/swags']);
  }
}
