import { Routes } from '@angular/router';
import { SwagListComponent } from './swag-list/swag-list.component';
import { SwagEditComponent } from './swag-edit/swag-edit.component';

export const SWAG_ROUTES: Routes = [
  {
    path: 'swags',
    component: SwagListComponent
  },
  {
    path: 'swags/:id',
    component: SwagEditComponent
  }
];
