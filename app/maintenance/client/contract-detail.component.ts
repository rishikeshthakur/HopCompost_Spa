import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IContract } from '../../models/contract';
import { ClientService } from './client.service';

@Component({
    moduleId: module.id,
    templateUrl: 'contract-detail.component.html'
})
export class ContractDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Contract Detail';
    contract: IContract = {};
    clientId: number = 0;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute, private _router: Router, private _clientService: ClientService) {
    }

    ngOnInit(): void {
        this.onUndo();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getContract(id: number) {
        this.sub = this._clientService.getContract(id).subscribe(
            contract => {
                this.contract = contract;
            },
            error => {
                //this._notificationService.error(ContractSettings.FAIL_TOGETASSET);
            });
    }

    onSubmit(): void {
        this.contract.ClientId = this.clientId;

        this.sub = this._clientService.saveContract(this.contract).subscribe(
            success => {
                //this._notificationService.success(ContractSettings.SUCCESS_SAVEASSET);
                this.onBack();
            },
            error => {
                //this._notificationService.error(ContractSettings.FAIL_TOSAVEASSET);
            }
        );
    }

    onBack(): void {
        this._router.navigate(['/client', this.contract.ClientId]);
    }

    onUndo(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                if (id > 0) { this.getContract(id); }

                this.clientId = +params['clientId'];
            },
            error => {
                //this._notificationService.error(AssetSettings.FAIL_TOGETASSET);
            });
    }
}
