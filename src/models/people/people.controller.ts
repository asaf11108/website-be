import { Person } from './person.entity';
import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PeopleService } from './person.service';
import { PersonDto, PersonParams, PersonQuery } from './create-person.dto';

@Controller()
export class PersonController {

    constructor(private peopleService: PeopleService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll(): Observable<Person[]> {
        return from(this.peopleService.personRepository.find());
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    findQuery(@Query() query: PersonQuery): Observable<Person[]> {
        return from(this.peopleService.personRepository.find({
            where: query
        }));
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body() personDto: PersonDto) {
        this.peopleService.personRepository.create(personDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    patch(@Param() params: PersonParams, @Body() personDto: PersonDto) {
        this.peopleService.personRepository.update(params.id, personDto);
    }
}
