import { Routes } from '@angular/router';
import { SwaggerListComponent } from './swagger-list/swagger-list.component';
import { SwaggerEditComponent } from './swagger-edit/swagger-edit.component';

export const SWAGGER_ROUTES: Routes = [
  {
    path: 'swaggers',
    component: SwaggerListComponent
  },
  {
    path: 'swaggers/:id',
    component: SwaggerEditComponent
  }
];
