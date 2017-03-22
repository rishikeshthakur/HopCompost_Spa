import { IContract } from './../../models/contract';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IClient } from '../../models/client';
import { BaseService } from '../../shared/base.service';
import { AppSettings } from '../../app.settings';

@Injectable()
export class ClientService extends BaseService{
    private _clientUrl = `${AppSettings.API_ENDPOINT}/Client`;
    private _contractUrl = `${AppSettings.API_ENDPOINT}/Contract`;

    constructor(private _http: Http) {
        super();
    }

    getActiveClients(): Observable<any> {
        let url = `${this._clientUrl}`;
        return this._http.get(url, this.getOptions())
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    getClient(id: number): Observable<IClient> {
        return this._http.get(`${this._clientUrl}?id=${id}`, this.getOptions())
            .map((response: Response) => <IClient>response.json())
            .catch(this.handleError);
    }

    saveClient(client: IClient) {
        return this.save(client, this._clientUrl, this._http);
    }

    deleteClient(id: number){
        return this.delete(id, this._clientUrl, this._http);
    }

    getContract(id: number): Observable<IContract>{
        return this._http.get(`${this._contractUrl}?id=${id}`, this.getOptions())
            .map((response: Response) => <IContract>response.json())
            .catch(this.handleError);
    }

    saveContract(contract: IContract) {
        return this.save(contract, this._contractUrl, this._http);
    }

    deleteContract(id: number){
        return this.delete(id, this._contractUrl, this._http);
    }
}