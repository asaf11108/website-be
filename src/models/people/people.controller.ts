import { Person } from './person.entity';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { from, Observable } from 'rxjs';
import { PeopleService } from './person.service';

@Controller()
export class PersonController {

    constructor(private peopleService: PeopleService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll(): Observable<Person[]> {
        return from(this.peopleService.personRepository.find());
    }

}
