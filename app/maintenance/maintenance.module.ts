import { NgModule } from '@angular/core';
import { ClientModule } from './client/client.module';
import { BinModule } from './binprocess/bin.module';

@NgModule({
  imports: [
    ClientModule,
    BinModule
  ]
})
export class MaintenanceModule { }
