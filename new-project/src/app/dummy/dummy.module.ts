import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DummyListComponent } from './dummy-list/dummy-list.component';
import { DummyEditComponent } from './dummy-edit/dummy-edit.component';
import { DummyService } from './dummy.service';
import { DUMMY_ROUTES } from './dummy.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(DUMMY_ROUTES)
  ],
  declarations: [
    DummyListComponent,
    DummyEditComponent
  ],
  providers: [DummyService],
  exports: []
})
export class DummyModule { }
