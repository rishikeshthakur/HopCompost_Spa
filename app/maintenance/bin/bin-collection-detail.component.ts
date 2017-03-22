import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IBin } from '../../models/bin';
import { BinService } from './bin.service';
//import { NotificationService } from '../../shared/notification.service';

@Component({
    moduleId: module.id,
    templateUrl: 'bin-collection-detail.component.html'
})
export class BinCollectionDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Bin Collection';
    bin: IBin = {};
    private sub: Subscription;

    constructor(private _route: ActivatedRoute, private _router: Router, private _binService: BinService) {
    }

    ngOnInit(): void {
        this.onUndo();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getBin(id: number) {
        this.sub = this._binService.getBin(id).subscribe(
            bin => this.bin = bin,
            error => {
                //this._notificationService.error(binSettings.FAIL_TOGETASSET);
            });
    }

    onSubmit(): void {
        this.sub = this._binService.saveBin(this.bin).subscribe(
            success => {
                //this._notificationService.success(binSettings.SUCCESS_SAVEASSET);
                this.onBack();
            },
            error => {
                //this._notificationService.error(binSettings.FAIL_TOSAVEASSET);
            }
        );
    }

    onBack(): void {
        this._router.navigate(['/welcome']);
    }

    onUndo(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                if (id > 0) { this.getBin(id); }
            },
            error => {
                //this._notificationService.error(AssetSettings.FAIL_TOGETASSET);
            });
    }

    onActionComplete(event: any): void {
        let isSuccess = event as boolean;

        if(isSuccess) {
            this.onUndo();
        }
    }
}
