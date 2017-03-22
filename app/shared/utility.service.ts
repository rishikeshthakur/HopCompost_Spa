import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
    isTrue(compare: string, compareWith: string): boolean {
        return compare.trim() === compareWith.trim();
    }
}