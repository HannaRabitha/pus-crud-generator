import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SwaggerListComponent } from './swagger-list/swagger-list.component';
import { SwaggerEditComponent } from './swagger-edit/swagger-edit.component';
import { SwaggerService } from './swagger.service';
import { SWAGGER_ROUTES } from './swagger.routes';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SWAGGER_ROUTES),
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    SwaggerListComponent,
    SwaggerEditComponent
  ],
  providers: [SwaggerService],
  exports: [ 
    SwaggerListComponent,
    SwaggerEditComponent
  ]
})
export class SwaggerModule { }
