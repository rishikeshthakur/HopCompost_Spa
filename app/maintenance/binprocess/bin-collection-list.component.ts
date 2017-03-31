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
    templateUrl: 'bin-collection-list.component.html'
})
export class BinCollectionListComponent extends BaseListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Bin Collection List';
    employees: Observable<ILookup[]>;
    clients: Observable<ILookup[]>;
    origin: string;
    employeeId: number;
    clientId: number;
    selectedDate: Date;
    bins: IBin[] = [];
    private sub: Subscription;

    constructor(private _binService: BinService,
        private _route: ActivatedRoute, private _router: Router) {
        super();
    }

    ngOnInit(): void {
        this.employees = this._binService.getEmployees();
        this.clients = this._binService.getClients();
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    searchOnClick(): void {
        this.getPastCollection();
    }

    employeeFilterChange(event: any): void {
        this.employeeId = event.target.value;
    }

    clientFilterChange(event: any): void {
        this.clientId = event.target.value;
    }

    getPastCollection(): void {
        this.sub = this._binService.getPastCollection(this.employeeId, this.clientId, this.selectedDate)
            .subscribe(result => {
                this.bins = result;
            });
    }
}
