import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RoomListComponent } from './room-list/room-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomCreateComponent,
    RoomListComponent,
    RoomEditComponent
  ],
  imports: [
    Ng2SmartTableModule,
    NgxPaginationModule,
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RoomsModule {}
