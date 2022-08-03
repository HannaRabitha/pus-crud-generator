import { Component, OnInit } from '@angular/core';
import { SwagFilter } from '../swag-filter';
import { SwagService } from '../swag.service';
import { Swag } from '../swag.model';

@Component({
  selector: 'app-swag',
  templateUrl: 'swag-list.component.html'
})
export class SwagListComponent implements OnInit {

  filter = new SwagFilter();
  selectedSwag!: Swag;
  feedback: any = {};
  cp: number = 1;
  key: string = '';
  reverse: boolean = false;

  get swagList(): Swag[] {
    return this.swagService.swagList;
  }

  constructor(private swagService: SwagService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.swagService.loadData(this.filter);
  }

  select(selected: Swag): void {
    this.selectedSwag = selected;
  }

  delete(swag: Swag): void {
    if (confirm('Are you sure?')) {
      this.swagService.deleteData(swag).subscribe({
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
