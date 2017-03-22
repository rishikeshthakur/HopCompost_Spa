import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from './base.component';
import { AppSettings } from './../app.settings';


export class BaseListComponent extends BaseComponent {
    // localListFilter: string = AppSettings.LOCALSTORAGE_LISTFILTER;
    // localPageIndex: string = AppSettings.LOCALSTORAGE_PAGEINDEX;

    // listFilter: string = '';
    // pageIndex: number;
    // pageSize: number;
    // pageCase: string = 'all';
    // totalItems: number = 0;
    // totalPages: number = 0;

    constructor() {
        // console.log(this._router.url.split('/')[1]);

        super();
    }

    // getFirstPageDetails(): void {
    //     this.listFilter = '';
    //     this.getSearchPageDetails();
    // }

    // getSearchPageDetails(): void {
    //     this.pageSize = AppSettings.PAGE_SIZE;
    //     this.pageIndex = 1;

    //     localStorage.setItem(this.localListFilter, this.listFilter);
    //     localStorage.setItem(this.localPageIndex, this.pageIndex.toString());
    // }

    // getPageDetails(_route: ActivatedRoute): void {
    //     this.pageSize = AppSettings.PAGE_SIZE;

    //     _route.params.subscribe(
    //         params => {
    //             let type = params['type'];

    //             this.listFilter = type && type === 'return' ?
    //                 localStorage[this.localListFilter] ?
    //                     localStorage[this.localListFilter] : ''
    //                 : '';

    //             this.pageIndex = type && type === 'return' ?
    //                 localStorage[this.localPageIndex] ?
    //                     +localStorage[this.localPageIndex] : 1
    //                 : 1;

    //             localStorage.setItem(this.localListFilter, this.listFilter);
    //             localStorage.setItem(this.localPageIndex, this.pageIndex.toString());
    //         });
    // }

    // updateListFilter(): void{
    //     localStorage.setItem(this.localListFilter, this.listFilter);
    // }
}
