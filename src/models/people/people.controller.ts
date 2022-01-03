import { Person } from './person.entity';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { from, map, Observable } from 'rxjs';
import { PeopleService } from './person.service';
import { PersonDto, PersonParams, PersonQuery } from './create-person.dto';

@Controller()
export class PersonController {

    constructor(private peopleService: PeopleService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    findQuery(@Query() query: PersonQuery): Observable<Person[]> {
        return from(this.peopleService.personRepository.find({
            where: query
        }));
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body() personDto: PersonDto): Observable<Person> {
        return from(this.peopleService.personRepository.insert(personDto)).pipe(
            map(result => ({ id: result.identifiers[0].id, ...personDto }))
        );
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    patch(@Param() params: PersonParams, @Body() personDto: PersonDto) {
        this.peopleService.personRepository.update(params.id, personDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    delete(@Param() params: PersonParams) {
        this.peopleService.personRepository.delete(params.id);
    }
}
