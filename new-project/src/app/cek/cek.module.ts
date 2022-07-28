import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CekListComponent } from './cek-list/cek-list.component';
import { CekEditComponent } from './cek-edit/cek-edit.component';
import { CekService } from './cek.service';
import { CEK_ROUTES } from './cek.routes';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CEK_ROUTES),
    NgxPaginationModule,
    Ng2OrderModule
  ],
  declarations: [
    CekListComponent,
    CekEditComponent
  ],
  providers: [CekService],
  exports: [ 
    CekListComponent,
    CekEditComponent
  ]
})
export class CekModule { }
