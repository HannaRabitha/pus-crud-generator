import { Component, OnInit } from '@angular/core';
import { CekFilter } from '../cek-filter';
import { CekService } from '../cek.service';
import { Cek } from '../cek';

@Component({
  selector: 'app-cek',
  templateUrl: 'cek-list.component.html'
})
export class CekListComponent implements OnInit {

  filter = new CekFilter();
  selectedCek!: Cek;
  feedback: any = {};
  cp: number = 1;
  key: string = '';
  reverse: boolean = false;

  get cekList(): Cek[] {
    return this.cekService.cekList;
  }

  constructor(private cekService: CekService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.cekService.load(this.filter);
  }

  select(selected: Cek): void {
    this.selectedCek = selected;
  }

  delete(cek: Cek): void {
    if (confirm('Are you sure?')) {
      this.cekService.delete(cek).subscribe({
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

  sort(key:string) {
    this.key = key;
    this.reverse = !this.reverse;

  }
  
}
