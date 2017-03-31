import { Observable } from 'rxjs/Observable';

import { BaseListComponent } from './../../shared/base.list.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

//import { NotificationService } from '../../shared/notification.service';
import { BinService } from './bin.service';
import { IBin } from '../../models/bin';
import { ILookup } from '../../models/lookup';

@Component({
    moduleId: module.id,
    templateUrl: 'bin-processing-list.component.html'
})
export class BinProcessingListComponent extends BaseListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Bin Processing List';
    bins: IBin[] = [];
    private sub: Subscription;

    constructor(private _binService: BinService,
        private _route: ActivatedRoute, private _router: Router) {
        super();
    }

    ngOnInit(): void {
        this.getProcessingCollection();
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    getProcessingCollection(): void {
        this.sub = this._binService.getProcessingCollection()
            .subscribe(result => {
                this.bins = result;
            });
    }
}
