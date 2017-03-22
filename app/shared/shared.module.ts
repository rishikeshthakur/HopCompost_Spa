import { UtilityService } from './utility.service';
import { MomentPipe } from './moment.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import { ToastyModule } from 'ng2-toasty';
import { BusyModule, BusyConfig } from 'angular2-busy';

import { PageComponent } from './page.component';
import { ShortenComponent } from './shorten.component';

import { FormatService } from './format.service';

@NgModule({
  imports: [
    CommonModule,
    //ToastyModule.forRoot(),
    BusyModule.forRoot(new BusyConfig({
      message: 'Processing...'
    }))
  ],
  exports: [
    FormsModule,
    CommonModule,
    //ToastyModule,
    BusyModule,
    PageComponent,
    ShortenComponent,
    MomentPipe
  ],
  declarations: [
    PageComponent,
    ShortenComponent,
    MomentPipe
  ],
  providers: [
    FormatService,
    UtilityService
  ]
})
export class SharedModule { }
