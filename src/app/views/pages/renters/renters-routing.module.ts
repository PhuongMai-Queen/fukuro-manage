import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenterCreateComponent } from './renter-create/renter-create.component';
import { RenterEditComponent } from './renter-edit/renter-edit.component';
import { RenterListComponent } from './renter-list/renter-list.component';
import { RentersComponent } from './renters.component';

const routes: Routes = [
  {
    path: '',
    component: RentersComponent,
    children: [
      {
        path: 'list',
        component: RenterListComponent,
      },
      {
        path: 'create',
        component: RenterCreateComponent,
      },
      {
        path: 'edit/:id',
        component: RenterEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentersRoutingModule {}
