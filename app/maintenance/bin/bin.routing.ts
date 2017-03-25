//import { AuthGuard } from './../../auth-guard.service';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { BinCollectionListComponent } from './bin-collection-list.component';
import { BinCollectionDetailComponent } from './bin-collection-detail.component';
import { BinProcessingListComponent } from './bin-processing-list.component';
import { BinProcessingDetailComponent } from './bin-processing-detail.component';

export const BinRoutes: Routes = [
  { path: 'bin-collections', component: BinCollectionListComponent },
  { path: 'bin-collection/:id', component: BinCollectionDetailComponent },
  { path: 'bin-processings', component: BinProcessingListComponent },
  { path: 'bin-processing/:id', component: BinProcessingDetailComponent },
];

export const BinRouting: ModuleWithProviders =
                RouterModule.forChild(BinRoutes);
