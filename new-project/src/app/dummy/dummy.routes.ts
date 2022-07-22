import { Routes } from '@angular/router';
import { DummyListComponent } from './dummy-list/dummy-list.component';
import { DummyEditComponent } from './dummy-edit/dummy-edit.component';

export const DUMMY_ROUTES: Routes = [
  {
    path: 'dummies',
    component: DummyListComponent
  },
  {
    path: 'dummies/:id',
    component: DummyEditComponent
  }
];
