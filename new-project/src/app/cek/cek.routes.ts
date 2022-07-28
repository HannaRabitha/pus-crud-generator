import { Routes } from '@angular/router';
import { CekListComponent } from './cek-list/cek-list.component';
import { CekEditComponent } from './cek-edit/cek-edit.component';

export const CEK_ROUTES: Routes = [
  {
    path: 'ceks',
    component: CekListComponent
  },
  {
    path: 'ceks/:id',
    component: CekEditComponent
  }
];
