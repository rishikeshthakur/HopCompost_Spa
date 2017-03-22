import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class FormatService {

    constructor() { }

    formatDate(date: string): string {
        if (date) {
            return moment(date).format('YYYY-MM-DD'); // The reason this is done is to abide by HTML5 date type control's expectation.
        }
    }
}