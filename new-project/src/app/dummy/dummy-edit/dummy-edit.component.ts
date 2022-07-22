import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DummyService } from '../dummy.service';
import { Dummy } from '../dummy';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-dummy-edit',
  templateUrl: './dummy-edit.component.html'
})
export class DummyEditComponent implements OnInit {

  id!: string;
  dummy!: Dummy;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dummyService: DummyService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Dummy()); }
          return this.dummyService.findById(id);
        })
      )
      .subscribe({
        next: dummy => {
          this.dummy = dummy;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.dummyService.save(this.dummy).subscribe({
      next: dummy => {
        this.dummy = dummy;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/dummies']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/dummies']);
  }
}
