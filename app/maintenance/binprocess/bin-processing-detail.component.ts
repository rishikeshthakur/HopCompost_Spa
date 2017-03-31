import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IBinWeightCollection } from '../../models/binWeightCollection';
import { BinService } from './bin.service';
//import { NotificationService } from '../../shared/notification.service';

@Component({
    moduleId: module.id,
    templateUrl: 'bin-processing-detail.component.html'
})
export class BinProcessingDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Bin Processing';
    binWeightCollection: IBinWeightCollection = {};
    private sub: Subscription;

    constructor(private _route: ActivatedRoute, private _router: Router, private _binService: BinService) {
    }

    ngOnInit(): void {
        this.onUndo();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getBinWeightCollection(id: number) {
        this.sub = this._binService.getBinWeightCollection(id).subscribe(
            binWeightCollection => this.binWeightCollection = binWeightCollection,
            error => {
                //this._notificationService.error(binSettings.FAIL_TOGETASSET);
            });
    }

    onBack(): void {
        this._router.navigate(['/bin-processings']);
    }

    onUndo(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];

                this.binWeightCollection = {};

                if (id > 0) { this.getBinWeightCollection(id); }
            },
            error => {
                //this._notificationService.error(AssetSettings.FAIL_TOGETASSET);
            });
    }

    onSubmit(): void{
        this.sub = this._binService.saveBinWeightCollection(this.binWeightCollection).subscribe(
            success => {
                //this._notificationService.success(binSettings.SUCCESS_SAVEASSET);
                this.onBack();
            },
            error => {
                //this._notificationService.error(binSettings.FAIL_TOSAVEASSET);
            }
        );
    }
}
