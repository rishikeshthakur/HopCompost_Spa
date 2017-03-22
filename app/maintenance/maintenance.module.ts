import { NgModule } from '@angular/core';
import { ClientModule } from './client/client.module';
import { BinModule } from './bin/bin.module';

@NgModule({
  imports: [
    ClientModule,
    BinModule
  ]
})
export class MaintenanceModule { }
