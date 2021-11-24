/*
https://docs.nestjs.com/providers#services
*/

import { Website } from '../shared/interfaces';
import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { Observable, from } from 'rxjs';
import * as csv from 'csvtojson';

@Injectable()
export class ReportsService {
    static headers = [
        'websiteId',
        'date',
        'widgetId',
        'clicks',
        'impressions',
        'revenue',
    ];
    static filePath = join(__dirname, '../assets/all_data.csv');

    get websites(): Observable<Website[]> {
        return from(
            csv({
                headers: ReportsService.headers,
            }).fromFile(ReportsService.filePath)
        );
    }
}
