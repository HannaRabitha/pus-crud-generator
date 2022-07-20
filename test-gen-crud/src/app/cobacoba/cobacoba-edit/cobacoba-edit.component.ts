import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CobacobaService } from '../cobacoba.service';
import { Cobacoba } from '../cobacoba';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-cobacoba-edit',
  templateUrl: './cobacoba-edit.component.html'
})
export class CobacobaEditComponent implements OnInit {

  id!: string;
  cobacoba!: Cobacoba;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cobacobaService: CobacobaService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Cobacoba()); }
          return this.cobacobaService.findById(id);
        })
      )
      .subscribe({
        next: cobacoba => {
          this.cobacoba = cobacoba;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.cobacobaService.save(this.cobacoba).subscribe({
      next: cobacoba => {
        this.cobacoba = cobacoba;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/cobacobas']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/cobacobas']);
  }
}
