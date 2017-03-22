import { IContract } from './../../models/contract';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IBin } from '../../models/bin';
import { BaseService } from '../../shared/base.service';
import { AppSettings } from '../../app.settings';

@Injectable()
export class BinService extends BaseService{
    private _binUrl = `${AppSettings.API_ENDPOINT}/BinCollection`;

    constructor(private _http: Http) {
        super();
    }

    getBin(id: number): Observable<IBin> {
        return this._http.get(`${this._binUrl}?id=${id}`, this.getOptions())
            .map((response: Response) => <IBin>response.json())
            .catch(this.handleError);
    }

    saveBin(bin: IBin) {
        return this.save(bin, this._binUrl, this._http);
    }

    deleteBin(id: number){
        return this.delete(id, this._binUrl, this._http);
    }
}