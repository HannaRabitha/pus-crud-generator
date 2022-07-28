import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CekService } from '../cek.service';
import { Cek } from '../cek';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-cek-edit',
  templateUrl: './cek-edit.component.html'
})
export class CekEditComponent implements OnInit {

  id!: string;
  cek!: Cek;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cekService: CekService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Cek()); }
          return this.cekService.findById(id);
        })
      )
      .subscribe({
        next: cek => {
          this.cek = cek;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.cekService.save(this.cek).subscribe({
      next: cek => {
        this.cek = cek;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/ceks']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/ceks']);
  }
}
