import { Component, OnInit } from '@angular/core';
import { CobacobaFilter } from '../cobacoba-filter';
import { CobacobaService } from '../cobacoba.service';
import { Cobacoba } from '../cobacoba';

@Component({
  selector: 'app-cobacoba',
  templateUrl: 'cobacoba-list.component.html'
})
export class CobacobaListComponent implements OnInit {

  filter = new CobacobaFilter();
  selectedCobacoba!: Cobacoba;
  feedback: any = {};

  get cobacobaList(): Cobacoba[] {
    return this.cobacobaService.cobacobaList;
  }

  constructor(private cobacobaService: CobacobaService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.cobacobaService.load(this.filter);
  }

  select(selected: Cobacoba): void {
    this.selectedCobacoba = selected;
  }

  delete(cobacoba: Cobacoba): void {
    if (confirm('Are you sure?')) {
      this.cobacobaService.delete(cobacoba).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      });
    }
  }
}
