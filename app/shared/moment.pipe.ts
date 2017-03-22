import { Pipe } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'moment' })
export class MomentPipe {
    transform(value: any, args: any = 'MMM DD, YYYY') {
        value = value + '';
        args = args + '';
        return moment(value).format(args);
    }
}