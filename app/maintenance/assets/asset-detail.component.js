// import { Observable } from 'rxjs/Observable';
// import { LookupService } from './../../lookup/lookup.service';
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';
// import { IAsset } from '../../models/asset';
// import { ILocation } from './../../models/location';
// import { IAssetType } from './../../models/assetType';
// import { AssetService } from './asset.service';
// import { AssetSettings } from './asset.settings';
// import { NotificationService } from '../../shared/notification.service';
// @Component({
//     moduleId: module.id,
//     templateUrl: 'asset-detail.component.html'
// })
// export class AssetDetailComponent implements OnInit, OnDestroy {
//     pageTitle: string = 'Asset Detail';
//     asset: IAsset = {};
//     locations: Observable<ILocation[]>;
//     assetTypes: Observable<IAssetType[]>;
//     private sub: Subscription;
//     constructor(private _route: ActivatedRoute, private _router: Router, private _assetService: AssetService,
//         private _lookupService: LookupService, private _notificationService: NotificationService) {
//     }
//     ngOnInit(): void {
//         this.assetTypes = this._lookupService.getAssetTypes();
//         this.locations = this._lookupService.getLocations();
//         this.onUndo();
//     }
//     ngOnDestroy() {
//         this.sub.unsubscribe();
//     }
//     getAsset(id: number) {
//         this.sub = this._assetService.getAsset(id).subscribe(
//             asset => this.asset = asset,
//             error => {
//                 this._notificationService.error(AssetSettings.FAIL_TOGETASSET);
//             });
//     }
//     onSubmit(): void {
//         this.sub = this._assetService.saveAsset(this.asset).subscribe(
//             success => {
//                 this._notificationService.success(AssetSettings.SUCCESS_SAVEASSET);
//                 this.onBack();
//             },
//             error => {
//                 this._notificationService.error(AssetSettings.FAIL_TOSAVEASSET);
//             }
//         );
//     }
//     onBack(): void {
//         this._router.navigate(['/assets/return']);
//     }
//     onUndo(): void {
//         this.sub = this._route.params.subscribe(
//             params => {
//                 let id = +params['id'];
//                 if (id > 0) { this.getAsset(id); }
//             },
//             error => {
//                 this._notificationService.error(AssetSettings.FAIL_TOGETASSET);
//             });
//     }
// }
//# sourceMappingURL=asset-detail.component.js.map