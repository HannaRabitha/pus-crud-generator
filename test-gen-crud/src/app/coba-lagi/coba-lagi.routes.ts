import { Routes } from '@angular/router';
import { CobaLagiListComponent } from './coba-lagi-list/coba-lagi-list.component';
import { CobaLagiEditComponent } from './coba-lagi-edit/coba-lagi-edit.component';

export const COBA-LAGI_ROUTES: Routes = [
  {
    path: 'cobaLagis',
    component: CobaLagiListComponent
  },
  {
    path: 'cobaLagis/:id',
    component: CobaLagiEditComponent
  }
];
