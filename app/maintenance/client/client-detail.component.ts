import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IClient } from '../../models/client';
import { ClientService } from './client.service';
//import { NotificationService } from '../../shared/notification.service';

@Component({
    moduleId: module.id,
    templateUrl: 'client-detail.component.html'
})
export class ClientDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Client Detail';
    client: IClient = {};
    private sub: Subscription;

    constructor(private _route: ActivatedRoute, private _router: Router, private _clientService: ClientService) {
    }

    ngOnInit(): void {
        this.onUndo();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getClient(id: number) {
        this.sub = this._clientService.getClient(id).subscribe(
            client => this.client = client,
            error => {
                //this._notificationService.error(ClientSettings.FAIL_TOGETASSET);
            });
    }

    onSubmit(): void {
        this.sub = this._clientService.saveClient(this.client).subscribe(
            success => {
                //this._notificationService.success(ClientSettings.SUCCESS_SAVEASSET);
                this.onBack();
            },
            error => {
                //this._notificationService.error(ClientSettings.FAIL_TOSAVEASSET);
            }
        );
    }

    onBack(): void {
        this._router.navigate(['/clients']);
    }

    onUndo(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];

                this.client = {};

                if (id > 0) { this.getClient(id); }
            },
            error => {
                //this._notificationService.error(AssetSettings.FAIL_TOGETASSET);
            });
    }

    onActionComplete(event: any): void {
        let isSuccess = event as boolean;

        if (isSuccess) {
            this.onUndo();
        }
    }
}
