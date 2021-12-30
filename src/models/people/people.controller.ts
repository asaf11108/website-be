import { Person } from './person.entity';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { from, Observable } from 'rxjs';
import { PeopleService } from './person.service';
import { CreatePersonDto, FindPersonParams } from './create-person.dto';

@Controller()
export class PersonController {

    constructor(private peopleService: PeopleService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll(): Observable<Person[]> {
        return from(this.peopleService.personRepository.find());
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    findOne(@Param() params: FindPersonParams): Observable<Person> {
        return from(this.peopleService.personRepository.findOne(params.id));
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body() createPersonDto: CreatePersonDto) {
        this.peopleService.personRepository.create(createPersonDto);
    }

}
