import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsRoutingModule } from './bills-routing.module';
import { BillsComponent } from './bills.component';
import { BillCreateComponent } from './bill-create/bill-create.component';
import { BillEditComponent } from './bill-edit/bill-edit.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    BillsComponent,
    BillCreateComponent,
    BillListComponent,
    BillEditComponent
  ],
  imports: [
    Ng2SmartTableModule,
    NgxPaginationModule,
    CommonModule,
    BillsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BillsModule {}
