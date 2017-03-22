import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { BinRouting } from './bin.routing';
import { BinCollectionListComponent } from './bin-collection-list.component';
import { BinCollectionDetailComponent } from './bin-collection-detail.component';
import { BinProcessingComponent } from './bin-processing.component';
import { BinService } from './bin.service';

@NgModule({
  imports: [
    SharedModule,
    BinRouting
  ],
  declarations: [
    BinCollectionListComponent,
    BinCollectionDetailComponent,
    BinProcessingComponent
  ],
  providers: [
    BinService
  ]
})
export class BinModule {}
