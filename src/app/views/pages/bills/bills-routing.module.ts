import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillCreateComponent } from './bill-create/bill-create.component';
import { BillEditComponent } from './bill-edit/bill-edit.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillsComponent } from './bills.component';

const routes: Routes = [
  {
    path: '',
    component: BillsComponent,
    children: [
      {
        path: 'list',
        component: BillListComponent,
      },
      {
        path: 'create',
        component: BillCreateComponent,
      },
      {
        path: 'edit/:id',
        component: BillEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillsRoutingModule {}
