import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page-tag',
    templateUrl: 'page.component.html'
})
export class PageComponent implements OnInit {
    @Input() pageIndex: number = 1;
    @Input() totalPages: number = 1;

    @Output() pageChanged: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    nextPageClick(): void {
        this.pageIndex += 1;
        localStorage.setItem('pageIndex', this.pageIndex.toString());
        this.pageChanged.emit(this.pageIndex);
    }

    previousPageClick(): void {
        if (this.pageIndex > 0) { this.pageIndex -= 1; }
        localStorage.setItem('pageIndex', this.pageIndex.toString());
        this.pageChanged.emit(this.pageIndex);
    }

    firstPageClick(): void {
        this.pageIndex = 1;
        localStorage.setItem('pageIndex', this.pageIndex.toString());
        this.pageChanged.emit(this.pageIndex);
    }

    lastPageClick(): void {
        this.pageIndex = this.totalPages;
        localStorage.setItem('pageIndex', this.pageIndex.toString());
        this.pageChanged.emit(this.pageIndex);
    }
}