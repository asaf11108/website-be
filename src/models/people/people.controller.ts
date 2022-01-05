import { Person } from './person.entity';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { from, map } from 'rxjs';
import { PeopleService } from './person.service';
import { PersonDto, PersonParams, PersonQuery } from './person.dto';

@Controller()
export class PersonController {

    constructor(private peopleService: PeopleService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findQuery(@Query() query: PersonQuery): Promise<Person[]> {
        return this.peopleService.personRepository.find({
            where: query
        });
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() personDto: PersonDto): Promise<Person> {
        const insertResult = await this.peopleService.personRepository.insert(personDto);
        return { id: insertResult.identifiers[0].id, ...personDto };
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async patch(@Param() params: PersonParams, @Body() personDto: PersonDto) {
        this.peopleService.personRepository.update(params.id, personDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async delete(@Param() params: PersonParams) {
        this.peopleService.personRepository.delete(params.id);
    }
}
