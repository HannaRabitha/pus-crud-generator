import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CobaLagiService } from '../coba-lagi.service';
import { CobaLagi } from '../coba-lagi';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-coba-lagi-edit',
  templateUrl: './coba-lagi-edit.component.html'
})
export class CobaLagiEditComponent implements OnInit {

  id!: string;
  cobaLagi!: CobaLagi;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cobaLagiService: CobaLagiService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new CobaLagi()); }
          return this.cobaLagiService.findById(id);
        })
      )
      .subscribe({
        next: cobaLagi => {
          this.cobaLagi = cobaLagi;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.cobaLagiService.save(this.cobaLagi).subscribe({
      next: cobaLagi => {
        this.cobaLagi = cobaLagi;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/cobaLagis']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/cobaLagis']);
  }
}
