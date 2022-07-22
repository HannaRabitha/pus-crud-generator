import { Component, OnInit } from '@angular/core';
import { DummyFilter } from '../dummy-filter';
import { DummyService } from '../dummy.service';
import { Dummy } from '../dummy';

@Component({
  selector: 'app-dummy',
  templateUrl: 'dummy-list.component.html'
})
export class DummyListComponent implements OnInit {

  filter = new DummyFilter();
  selectedDummy!: Dummy;
  feedback: any = {};

  get dummyList(): Dummy[] {
    return this.dummyService.dummyList;
  }

  constructor(private dummyService: DummyService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.dummyService.load(this.filter);
  }

  select(selected: Dummy): void {
    this.selectedDummy = selected;
  }

  delete(dummy: Dummy): void {
    if (confirm('Are you sure?')) {
      this.dummyService.delete(dummy).subscribe({
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
