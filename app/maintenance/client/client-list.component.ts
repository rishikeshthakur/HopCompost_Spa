import { BaseListComponent } from './../../shared/base.list.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

//import { NotificationService } from '../../shared/notification.service';
import { ClientService } from './client.service';
import { IClient } from '../../models/client';

@Component({
    moduleId: module.id,
    templateUrl: 'client-list.component.html'
})
export class ClientListComponent extends BaseListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Client List';
    clients: IClient[] = [];
    private sub: Subscription;

    constructor(private _clientService: ClientService,
        private _route: ActivatedRoute, private _router: Router) {
        super();
    }

    ngOnInit(): void {
        this.clients = [];
        
        this.getActiveClients();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    newClientOnClick(): void {
        this._router.navigate(['/client', 0]);
    }

    onDelete(event: any): void {
        let target = event.target || event.srcElement || event.currentTarget;
        let idAttr = target.attributes.id;
        let id = idAttr.nodeValue;

        this.sub = this._clientService.deleteClient(id).subscribe(
            success => {
                //this._notificationService.success(ClientSettings.SUCCESS_SAVEASSET);
                this.getActiveClients();
            },
            error => {
                //this._notificationService.error(ClientSettings.FAIL_TOSAVEASSET);
            }
        );
    }

    private getActiveClients(): void {
        this.sub = this._clientService.getActiveClients()
            .subscribe(
            result => {
                this.clients = result;
            },
            error => {
                //this._notificationService.error(ClientSettings.FAIL_TOGETCLIENTS);
            });
    }
}
