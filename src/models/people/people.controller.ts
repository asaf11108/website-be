import { Person } from './person.entity';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PeopleService } from './person.service';
import { PersonDto, PersonParams, PersonQuery } from './person.dto';
import { CarService } from '../car/car.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('people')
@Controller()
export class PersonController {

    constructor(private peopleService: PeopleService, private carService: CarService) { }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findQuery(@Query() query: PersonQuery): Promise<Person[]> {
        return this.peopleService.personRepository.find({
            where: query
        });
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async findOne(@Param() { id }: PersonParams): Promise<Person> {
        return this.peopleService.personRepository.findOne({
            relations: ['car'],
            where: { id }
        });
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() personDto: PersonDto): Promise<Person> {
        const insertResult = await this.peopleService.personRepository.insert(personDto);
        const car = await this.carService.carRepository.findOne(1);
        return { id: insertResult.identifiers[0].id, ...personDto, car };
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async patch(@Param() params: PersonParams, @Body() personDto: PersonDto) {
        this.peopleService.personRepository.update(params.id, personDto);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async delete(@Param() params: PersonParams) {
        this.peopleService.personRepository.delete(params.id);
    }
}
