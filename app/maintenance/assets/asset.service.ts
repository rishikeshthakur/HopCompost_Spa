// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

// import { IAsset } from '../../models/asset';
// import { BaseService } from '../../shared/base.service';
// import { AppSettings } from '../../app.settings';

// @Injectable()
// export class AssetService extends BaseService {
//     private _assetUrl = `${AppSettings.API_ENDPOINT}/Asset`;

//     constructor(private _http: Http) {
//         super();
//     }

//     getAssets(page: number, search: string): Observable<any> {
//         let url = `${this._assetUrl}?pn=${page}&ob=`;
//         if (search !== '') { url = url + '&search=' + search; }
//         return this._http.get(url, this.getOptions())
//             .map((response: Response) => response.json())
//             .catch(this.handleError);
//     }

//     getAsset(id: number): Observable<IAsset> {
//         return this._http.get(`${this._assetUrl}?id=${id}`, this.getOptions())
//             .map((response: Response) => <IAsset>response.json())
//             .catch(this.handleError);
//     }

//     saveAsset(asset: IAsset) {
//         return this.save(asset, this._assetUrl, this._http);
//     }
// }
