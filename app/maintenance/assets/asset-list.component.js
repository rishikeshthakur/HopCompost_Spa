// import { BaseListComponent } from './../../shared/base.list.component';
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';
// import { NotificationService } from '../../shared/notification.service';
// import { AssetService } from './asset.service';
// import { IAsset } from '../../models/asset';
// import { AssetSettings } from './asset.settings';
// @Component({
//     moduleId: module.id,
//     templateUrl: 'asset-list.component.html'
// })
// export class AssetListComponent extends BaseListComponent implements OnInit, OnDestroy {
//     pageTitle: string = 'Asset List';
//     assets: IAsset[] = [];
//     private sub: Subscription;
//     constructor(private _assetService: AssetService, private _notificationService: NotificationService,
//         private _route: ActivatedRoute, private _router: Router) {
//         super();
//     }
//     ngOnInit(): void {
//         this.getPageDetails(this._route);
//         this.getFilteredAssets();
//     }
//     ngOnDestroy() {
//         this.sub.unsubscribe();
//     }
//     newAssetOnClick(): void {
//         this._router.navigate(['/asset', 0]);
//     }
//     searchOnClick(): void {
//         this.getSearchPageDetails();
//         this.getFilteredAssets();
//     }
//     allAssetsOnClick(): void {
//         this.getFirstPageDetails();
//         this.pageCase = 'all';
//         this.getFilteredAssets();
//     }
//     activeAssetsOnClick(): void {
//         this.getFirstPageDetails();
//         this.pageCase = 'active';
//         this.getActiveAssets();
//     }
//     inServiceAssetsOnClick(): void {
//         this.getFirstPageDetails();
//         this.pageCase = 'inservice';
//         this.getAssetsInService();
//     }
//     onPageChanged(e: any) {
//         this.pageIndex = e;
//         this.getPagedResult();
//     }
//     getPagedResult(): void {
//         switch (this.pageCase) {
//             case 'all':
//                 this.getFilteredAssets();
//                 break;
//             case 'search':
//                 this.getFilteredAssets();
//                 break;
//             case 'active':
//                 this.getActiveAssets();
//                 break;
//             case 'inservice':
//                 this.getAssetsInService();
//                 break;
//             default:
//                 this.getFilteredAssets();
//                 break;
//         }
//     }
//     private getActiveAssets(): void {
//         this.sub = this._assetService.getActiveAssets(this.pageIndex)
//             .subscribe(
//             result => {
//                 this.assets = result.data;
//                 this.totalItems = result.totalItems;
//                 this.totalPages = result.totalPages;
//             },
//             error => {
//                 this._notificationService.error(AssetSettings.FAIL_TOGETASSETS);
//             });
//     }
//     private getAssetsInService(): void {
//         this.sub = this._assetService.getAssetsInService(this.pageIndex)
//             .subscribe(
//             result => {
//                 this.assets = result.data;
//                 this.totalItems = result.totalItems;
//                 this.totalPages = result.totalPages;
//             },
//             error => {
//                 this._notificationService.error(AssetSettings.FAIL_TOGETASSETS);
//             });
//     }
//     private getFilteredAssets(): void {
//         this.updateListFilter();
//         this.sub = this._assetService.getAssets(this.pageIndex, this.listFilter)
//             .subscribe(
//             result => {
//                 this.assets = result.data;
//                 this.totalItems = result.totalItems;
//                 this.totalPages = result.totalPages;
//             },
//             error => {
//                 this._notificationService.error(AssetSettings.FAIL_TOGETASSETS);
//             });
//     }
// }
//# sourceMappingURL=asset-list.component.js.map