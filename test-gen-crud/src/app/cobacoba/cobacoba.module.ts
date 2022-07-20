import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CobacobaListComponent } from './cobacoba-list/cobacoba-list.component';
import { CobacobaEditComponent } from './cobacoba-edit/cobacoba-edit.component';
import { CobacobaService } from './cobacoba.service';
import { COBACOBA_ROUTES } from './cobacoba.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(COBACOBA_ROUTES)
  ],
  declarations: [
    CobacobaListComponent,
    CobacobaEditComponent
  ],
  providers: [CobacobaService],
  exports: []
})
export class CobacobaModule { }
