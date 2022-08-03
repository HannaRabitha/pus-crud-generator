import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SwagListComponent } from './swag-list/swag-list.component';
import { SwagEditComponent } from './swag-edit/swag-edit.component';
import { SwagService } from './swag.service';
import { SWAG_ROUTES } from './swag.routes';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SWAG_ROUTES),
    NgxPaginationModule,
    Ng2OrderModule
  ],
  declarations: [
    SwagListComponent,
    SwagEditComponent
  ],
  providers: [SwagService],
  exports: [
    SwagListComponent,
    SwagEditComponent
  ]
})
export class SwagModule { }
