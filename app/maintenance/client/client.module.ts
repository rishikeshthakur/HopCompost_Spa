import { ContractDetailComponent } from './contract-detail.component';
import { ContractListComponent } from './contract-list.component';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { clientRouting } from './client.routing';
import { ClientListComponent } from './client-list.component';
import { ClientDetailComponent } from './client-detail.component';
import { ClientService } from './client.service';

@NgModule({
  imports: [
    SharedModule,
    clientRouting
  ],
  declarations: [
    ClientListComponent,
    ClientDetailComponent,
    ContractListComponent,
    ContractDetailComponent
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule {}
