import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotelsRoutingModule } from './motels-routing.module';
import { MotelsComponent } from './motels.component';
import { MotelCreateComponent } from './motel-create/motel-create.component';
import { MotelEditComponent } from './motel-edit/motel-edit.component';
import { MotelListComponent } from './motel-list/motel-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    MotelsComponent,
    MotelCreateComponent,
    MotelListComponent,
    MotelEditComponent
  ],
  imports: [
    Ng2SmartTableModule,
    NgxPaginationModule,
    CommonModule,
    MotelsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MotelsModule {}
