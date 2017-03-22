/// <reference path="../typings/globals/jquery/index.d.ts" />;

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

//import { Auth } from './auth.service';
//import { NotificationService } from './shared/notification.service';

@Component({
    moduleId: module.id,
    selector: 'app-tag',
    templateUrl: 'app.component.html',
    //providers: [NotificationService]
})
export class AppComponent implements OnInit {
    pageTitle: string = 'HopCompost';

    constructor(private _router: Router) {
    }

    ngOnInit(): void {
        //if (!this._auth.authenticated) {
            this._router.navigate(['/welcome']);
        //}
    }
}
