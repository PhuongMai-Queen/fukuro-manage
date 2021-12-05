import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentersRoutingModule } from './renters-routing.module';
import { RentersComponent } from './renters.component';
import { RenterCreateComponent } from './renter-create/renter-create.component';
import { RenterEditComponent } from './renter-edit/renter-edit.component';
import { RenterListComponent } from './renter-list/renter-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    RentersComponent,
    RenterCreateComponent,
    RenterListComponent,
    RenterEditComponent
  ],
  imports: [
    Ng2SmartTableModule,
    NgxPaginationModule,
    CommonModule,
    RentersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RentersModule {}
