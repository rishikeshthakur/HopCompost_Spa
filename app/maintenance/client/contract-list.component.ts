import { IClient } from './../../models/client';
import { BaseListComponent } from './../../shared/base.list.component';
import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

//import { NotificationService } from '../../shared/notification.service';
import { ClientService } from './client.service';

@Component({
    moduleId: module.id,
    selector: 'contract-list-tag',
    templateUrl: 'contract-list.component.html'
})
export class ContractListComponent extends BaseListComponent implements OnInit, OnDestroy {
    @Input() client: IClient;

    @Output() actionCompleted: EventEmitter<boolean> = new EventEmitter();

    pageTitle: string = 'Contract List';
    private sub: Subscription;

    constructor(private _clientService: ClientService,
        private _route: ActivatedRoute, private _router: Router) {
        super();
    }

    ngOnInit(): void {
        this.client = {};
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    newContractOnClick(): void {
        this._router.navigate(['/contract', this.client.Id, 0]);
    }

    onDelete(event: any): void {
        let target = event.target || event.srcElement || event.currentTarget;
        let idAttr = target.attributes.id;
        let id = idAttr.nodeValue;

        this.sub = this._clientService.deleteContract(id).subscribe(
            success => {
                //this._notificationService.success(ContractSettings.SUCCESS_SAVEASSET);
                this.actionCompleted.emit(true);
            },
            error => {
                //this._notificationService.error(ContractSettings.FAIL_TOSAVEASSET);
                this.actionCompleted.emit(false);
            }
        );
    }
}
