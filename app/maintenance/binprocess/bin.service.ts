import { IContract } from './../../models/contract';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IBin } from '../../models/bin';
import { IBinWeightCollection } from '../../models/binWeightCollection';
import { IEmployee } from '../../models/employee';
import { IClient } from '../../models/client';
import { BaseService } from '../../shared/base.service';
import { AppSettings } from '../../app.settings';

@Injectable()
export class BinService extends BaseService {
    private _binUrl = `${AppSettings.API_ENDPOINT}/BinCollection`;
    private _employeeUrl = `${AppSettings.API_ENDPOINT}/Employee`;
    private _clientUrl = `${AppSettings.API_ENDPOINT}/Client`;

    constructor(private _http: Http) {
        super();
    }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get(`${this._employeeUrl}/GetLookup`, this.getOptions())
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }

    getClients(): Observable<IClient> {
        return this._http.get(`${this._clientUrl}/GetLookup`, this.getOptions())
            .map((response: Response) => <IClient[]>response.json())
            .catch(this.handleError);
    }

    getPastCollection(employeeId?: number, clientId?: number, selectedDate?: Date) {
        return this._http.get(`${this._binUrl}/GetPastCollection?employeeId=${employeeId ? employeeId : ''}&clientId=${clientId ? clientId : ''}&selectedDate=${selectedDate ? selectedDate : ''}`, this.getOptions())
            .map((response: Response) => <IBin[]>response.json())
            .catch(this.handleError);
    }

    getProcessingCollection() {
        return this._http.get(`${this._binUrl}/GetBinCollectionByStatus?status=Unprocessed`, this.getOptions())
            .map((response: Response) => <IBin[]>response.json())
            .catch(this.handleError);
    }

    getBinWeightCollection(id: number): Observable<IBin> {
        return this._http.get(`${this._binUrl}/GetBinWeightCollection?id=${id}`, this.getOptions())
            .map((response: Response) => <IBinWeightCollection>response.json())
            .catch(this.handleError);
    }

    getBin(id: number): Observable<IBin> {
        return this._http.get(`${this._binUrl}?id=${id}`, this.getOptions())
            .map((response: Response) => <IBin>response.json())
            .catch(this.handleError);
    }

    saveBinWeightCollection(binWeightCollection: IBinWeightCollection) {
        return this.save(binWeightCollection, `${this._binUrl}/PostBinWeightCollection`, this._http);
    }

    saveBin(bin: IBin) {
        bin.CollectionDate = null;

        return this.save(bin, this._binUrl, this._http);
    }

    deleteBin(id: number) {
        return this.delete(id, this._binUrl, this._http);
    }
}