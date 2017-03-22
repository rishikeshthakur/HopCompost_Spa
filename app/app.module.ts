//import { Auth } from './auth.service';
//import { AuthGuard } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { SharedModule } from './shared/shared.module';

//import { ToastyService, ToastyConfig } from 'ng2-toasty';

import { routing } from './app.routing';
import { TrimPipe } from './shared/trim.pipe';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

/* Feature Modules */
import { MaintenanceModule } from './maintenance/maintenance.module';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    HttpModule,
    routing,
    MaintenanceModule
  ],
  declarations: [
    TrimPipe,
    AppComponent,
    WelcomeComponent,
  ],
  //providers: [ AUTH_PROVIDERS, Auth, AuthGuard ], //, ToastyService, ToastyConfig ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
