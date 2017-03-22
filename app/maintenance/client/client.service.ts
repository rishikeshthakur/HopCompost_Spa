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
}