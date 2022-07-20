import { Component, OnInit } from '@angular/core';
import { CobaLagiFilter } from '../coba-lagi-filter';
import { CobaLagiService } from '../coba-lagi.service';
import { CobaLagi } from '../coba-lagi';

@Component({
  selector: 'app-coba-lagi',
  templateUrl: 'coba-lagi-list.component.html'
})
export class CobaLagiListComponent implements OnInit {

  filter = new CobaLagiFilter();
  selectedCobaLagi!: CobaLagi;
  feedback: any = {};

  get cobaLagiList(): CobaLagi[] {
    return this.cobaLagiService.cobaLagiList;
  }

  constructor(private cobaLagiService: CobaLagiService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.cobaLagiService.load(this.filter);
  }

  select(selected: CobaLagi): void {
    this.selectedCobaLagi = selected;
  }

  delete(cobaLagi: CobaLagi): void {
    if (confirm('Are you sure?')) {
      this.cobaLagiService.delete(cobaLagi).subscribe({
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
