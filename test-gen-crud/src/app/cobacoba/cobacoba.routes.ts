import { Routes } from '@angular/router';
import { CobacobaListComponent } from './cobacoba-list/cobacoba-list.component';
import { CobacobaEditComponent } from './cobacoba-edit/cobacoba-edit.component';

export const COBACOBA_ROUTES: Routes = [
  {
    path: 'cobacobas',
    component: CobacobaListComponent
  },
  {
    path: 'cobacobas/:id',
    component: CobacobaEditComponent
  }
];
