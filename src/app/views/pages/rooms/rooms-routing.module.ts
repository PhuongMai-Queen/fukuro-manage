import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    children: [
      {
        path: 'list',
        component: RoomListComponent,
      },
      {
        path: 'create',
        component: RoomCreateComponent,
      },
      {
        path: 'edit/:id',
        component: RoomEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
