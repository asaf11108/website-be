import { ReportsService } from './reports.service';
import { map, tap } from 'rxjs/operators';
import { Website } from '../shared/interfaces';
import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class GetReportsController {

    constructor(private ReportsService: ReportsService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get('allData')
    allData(): Observable<Website[]> {
        return this.ReportsService.websites;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':time')
    data(@Param('time', ParseIntPipe) time: number): Observable<Website[]> {
        return this.ReportsService.websites.pipe(
            map(websites => websites.filter(data => new Date(data.date).getTime() === time))
        );
    }
}
