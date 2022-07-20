import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CobaLagiListComponent } from './coba-lagi-list/coba-lagi-list.component';
import { CobaLagiEditComponent } from './coba-lagi-edit/coba-lagi-edit.component';
import { CobaLagiService } from './coba-lagi.service';
import { COBA-LAGI_ROUTES } from './coba-lagi.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(COBA-LAGI_ROUTES)
  ],
  declarations: [
    CobaLagiListComponent,
    CobaLagiEditComponent
  ],
  providers: [CobaLagiService],
  exports: []
})
export class CobaLagiModule { }
