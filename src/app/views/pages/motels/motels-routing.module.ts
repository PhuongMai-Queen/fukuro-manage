import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotelCreateComponent } from './motel-create/motel-create.component';
import { MotelEditComponent } from './motel-edit/motel-edit.component';
import { MotelListComponent } from './motel-list/motel-list.component';
import { MotelsComponent } from './motels.component';

const routes: Routes = [
  {
    path: '',
    component: MotelsComponent,
    children: [
      {
        path: 'list',
        component: MotelListComponent,
      },
      {
        path: 'create',
        component: MotelCreateComponent,
      },
      {
        path: 'edit/:id',
        component: MotelEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotelsRoutingModule {}
