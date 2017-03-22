import { ContractDetailComponent } from './contract-detail.component';
//import { AuthGuard } from './../../auth-guard.service';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ClientListComponent } from './client-list.component';
import { ClientDetailComponent } from './client-detail.component';

export const clientRoutes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'client/:id', component: ClientDetailComponent },
  { path: 'contract/:clientId/:id', component: ContractDetailComponent },
];

export const clientRouting: ModuleWithProviders =
                RouterModule.forChild(clientRoutes);
