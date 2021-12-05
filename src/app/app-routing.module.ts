import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./views/pages/not-found/not-found.component";

const routes: Routes = [
  { path: 'motels',
    loadChildren: () =>
      import('./views/pages/motels/motels.module').then((m) => m.MotelsModule)
  },
  { path: 'rooms',
    loadChildren: () =>
      import('./views/pages/rooms/rooms.module').then((m) => m.RoomsModule)
  },
  { path: 'renters',
    loadChildren: () =>
      import('./views/pages/renters/renters.module').then((m) => m.RentersModule)
  },
  { path: 'bills',
    loadChildren: () =>
      import('./views/pages/bills/bills.module').then((m) => m.BillsModule)
  },
  { path: '', redirectTo: 'motels/list', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
