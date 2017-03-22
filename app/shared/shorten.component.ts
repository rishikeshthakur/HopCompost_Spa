import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'shorten-tag',
    template: `
    {{input.substr(0, 50)}}<span *ngIf="input.length > 50">...</span>
    `
})
export class ShortenComponent implements OnInit {
    @Input() input: string;

    constructor() { }

    ngOnInit() { }
}