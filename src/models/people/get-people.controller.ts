import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable, of } from 'rxjs';
import { Website } from 'src/shared/interfaces';
import { PersonService } from './person.service';

@Controller()
export class GetPersonController {

    constructor(private ReportsService: PersonService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get('people')
    people(): Observable<any> {
        return of([]);
    }

}
